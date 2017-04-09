// Auto-generated. Do not edit!

// (in-package ackermann_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class AckermannDrive {
  constructor() {
    this.steering_angle = 0.0;
    this.steering_angle_velocity = 0.0;
    this.speed = 0.0;
    this.acceleration = 0.0;
    this.jerk = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AckermannDrive
    // Serialize message field [steering_angle]
    bufferInfo = _serializer.float32(obj.steering_angle, bufferInfo);
    // Serialize message field [steering_angle_velocity]
    bufferInfo = _serializer.float32(obj.steering_angle_velocity, bufferInfo);
    // Serialize message field [speed]
    bufferInfo = _serializer.float32(obj.speed, bufferInfo);
    // Serialize message field [acceleration]
    bufferInfo = _serializer.float32(obj.acceleration, bufferInfo);
    // Serialize message field [jerk]
    bufferInfo = _serializer.float32(obj.jerk, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AckermannDrive
    let tmp;
    let len;
    let data = new AckermannDrive();
    // Deserialize message field [steering_angle]
    tmp = _deserializer.float32(buffer);
    data.steering_angle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [steering_angle_velocity]
    tmp = _deserializer.float32(buffer);
    data.steering_angle_velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [speed]
    tmp = _deserializer.float32(buffer);
    data.speed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [acceleration]
    tmp = _deserializer.float32(buffer);
    data.acceleration = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [jerk]
    tmp = _deserializer.float32(buffer);
    data.jerk = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ackermann_msgs/AckermannDrive';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3512e91b48d69674a0e86fadf1ea8231';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = AckermannDrive;
