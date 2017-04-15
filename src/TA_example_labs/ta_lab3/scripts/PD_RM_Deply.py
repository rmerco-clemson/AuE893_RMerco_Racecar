#!/usr/bin/env python

"""

"""
import math
import random
import time
import rospy
import numpy as np
from geometry_msgs.msg import Twist
from sensor_msgs.msg import LaserScan


class turtlebot_autonomous:
    ''' '''
    def __init__(self):
        # publishers and subscribers
        self.velocity_publisher = rospy.Publisher(
            '/cmd_vel', Twist, queue_size=5)
        self.laser_subscriber = rospy.Subscriber(
            "/mybot/laser/scan", LaserScan, self.laser_callback, queue_size=5)
        self.turtlebot_laser = LaserScan()

        # from wanderer
        self.sect_1 = 0
        self.sect_2 = 0
        self.sect_3 = 0
        # self.ang = {0:0,001:-1.2,10:-1.2,11:-1.2,100:1.5,101:1.0,110:1.0,111:1.2}
        self.ang = {0:0,001:-0.2,10:-0.2,11:-0.4,100:0.2,101:0.4,110:0.4,111:0.4} 
        self.fwd = {0:.25,1:0,10:0,11:0,100:0.1,101:0,110:0,111:0}

        # area of distances in the three sectors
        self.sect_left = 0    
        self.sect_center = 0  
        self.sect_right = 0  
        
        # init parameters for steering controller    
        self.KpS = 0.06        
        self.KdS = 1.2    
        self.last_errorS = 0.0
        self.d_errorS = 0.0       

        # control frequency
        self.control_frequency = 50
        
    # reset of sectors
    def reset_sect(self):
        self.sect_1 = 0
        self.sect_2 = 0
        self.sect_3 = 0
        self.sect_center = 0

    # sort the sectors for the control laws
    def sort(self, laserscan):

        entries = len(laserscan.ranges)
        self.sect_left = laserscan.range_max            
        self.sect_center = laserscan.range_max         
        self.sect_right = laserscan.range_max         
        
        for entry in range(0,entries):
            # if 0.4 < laserscan.ranges[entry] < 0.75: # original laser scan ranges
            if 0 < laserscan.ranges[entry] < 0.35:
                self.sect_1 = 1 if (0 < entry < entries/3) else 0 
                self.sect_2 = 1 if (entries/3 < entry < entries/2) else 0
                self.sect_3 = 1 if (entries/2 < entry < entries) else 0

            # identify the area for each sector
            # right sector                   
            if (entries*3/10 < entry < entries*4/10):
                if (laserscan.ranges[entry] != float('inf')):
                    self.sect_right += laserscan.ranges[entry]*0.1

            # center sector
            if (entries*4/10 < entry < entries*6/10):
                if (laserscan.ranges[entry] < self.sect_center):
                    self.sect_center = laserscan.ranges[entry]

            # left sector
            if (entries*6/10 < entry < entries*7/10):
                if (laserscan.ranges[entry] != float('inf')):
                    self.sect_left += laserscan.ranges[entry]*0.1

        #rospy.loginfo("sort complete,sect_1: " + str(self.sect_1) + " sect_2: " + str(self.sect_2) + " sect_3: " + str(self.sect_3) + " sect_center: " + str(self.sect_center))

    def movement(self):
        '''Uses the information known about the obstacles to move robot.'''
        sect = int(str(self.sect_1) + str(self.sect_2) + str(self.sect_3))

        # Calculate error for PD
        errorST = self.sect_left - self.sect_right

        # dead band
        if (math.fabs(errorST) > 0.1 ): 
            errorS = errorST
        else:
            errorS = 0            
        
        # error calculation
        self.d_errorS = (errorS - self.last_errorS) / self.control_frequency
        self.last_errorS = errorS        

        # debug
        rospy.loginfo("Sect = " + str(sect) + " - Error: " + str(errorS) + " - Control = " + str(control))     

        # Define vel_msg
        vel_msg = Twist()

        if (sect == 0):
            control = self.KpS * errorS + self.KdS * self.d_errorS
        else:
            control = self.ang[sect]   

        vel_msg.linear.x = 0
        vel_msg.linear.y = 0
        vel_msg.linear.z = 0
        vel_msg.angular.x = 0
        vel_msg.angular.y = 0
        vel_msg.angular.z = np.clip(control, -30, 30)
        self.velocity_publisher.publish(vel_msg)

        self.reset_sect()
   
    
    def laser_callback(self, laserscan):
        '''Callback function for laser scan '''

        self.sort(laserscan)
        self.movement()

    def constrain(self, val, min_val, max_val):
        ''' Constrain val between min and max'''
        return min(max_val, max(min_val, val))
    
def main():

    # Start
    rospy.loginfo('Task start.')
    rospy.loginfo('Init...')

    turtlebot = turtlebot_autonomous()
    rospy.init_node('racing_autonomous', anonymous=True)

    rospy.spin()

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
