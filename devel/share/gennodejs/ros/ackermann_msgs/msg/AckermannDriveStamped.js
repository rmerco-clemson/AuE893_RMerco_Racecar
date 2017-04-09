// Auto-generated. Do not edit!

// (in-package ackermann_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let AckermannDrive = require('./AckermannDrive.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class AckermannDriveStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.drive = new AckermannDrive();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AckermannDriveStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [drive]
    bufferInfo = AckermannDrive.serialize(obj.drive, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AckermannDriveStamped
    let tmp;
    let len;
    let data = new AckermannDriveStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [drive]
    tmp = AckermannDrive.deserialize(buffer);
    data.drive = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ackermann_msgs/AckermannDriveStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1fd5d7f58889cefd44d29f6653240d0c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    ## Time stamped drive command for robots with Ackermann steering.
    #  $Id$
    
    Header          header
    AckermannDrive  drive
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: ackermann_msgs/AckermannDrive
    ## Driving command for a car-like vehicle using Ackermann steering.
    #  $Id$
    
    # Assumes Ackermann front-wheel steering. The left and right front
    # wheels are generally at different angles. To simplify, the commanded
    # angle corresponds to the yaw of a virtual wheel located at the
    # center of the front axle, like on a tricycle.  Positive yaw is to
    # the left. (This is *not* the angle of the steering wheel inside the
    # passenger compartment.)
    #
    # Zero steering angle velocity means change the steering angle as
    # quickly as possible. Positive velocity indicates a desired absolute
    # rate of change either left or right. The controller tries not to
    # exceed this limit in either direction, but sometimes it might.
    #
    float32 steering_angle          # desired virtual angle (radians)
    float32 steering_angle_velocity # desired rate of change (radians/s)
    
    # Drive at requested speed, acceleration and jerk (the 1st, 2nd and
    # 3rd derivatives of position). All are measured at the vehicle's
    # center of rotation, typically the center of the rear axle. The
    # controller tries not to exceed these limits in either direction, but
    # sometimes it might.
    #
    # Speed is the desired scalar magnitude of the velocity vector.
    # Direction is forward unless the sign is negative, indicating reverse.
    #
    # Zero acceleration means change speed as quickly as
    # possible. Positive acceleration indicates a desired absolute
    # magnitude; that includes deceleration.
    #
    # Zero jerk means change acceleration as quickly as possible. Positive
    # jerk indicates a desired absolute rate of acceleration change in
    # either direction (increasing or decreasing).
    #
    float32 speed                   # desired forward speed (m/s)
    float32 acceleration            # desired acceleration (m/s^2)
    float32 jerk                    # desired jerk (m/s^3)
    
    `;
  }

};

module.exports = AckermannDriveStamped;
