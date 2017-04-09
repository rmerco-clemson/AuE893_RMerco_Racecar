// Auto-generated. Do not edit!

// (in-package vesc_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let VescState = require('./VescState.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class VescStateStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.state = new VescState();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VescStateStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [state]
    bufferInfo = VescState.serialize(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VescStateStamped
    let tmp;
    let len;
    let data = new VescStateStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [state]
    tmp = VescState.deserialize(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vesc_msgs/VescStateStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3a2b3a0e5b5f10ce6bbf973d767cdc4d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Timestamped VESC open source motor controller state (telemetry)
    
    Header  header
    VescState state
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
    MSG: vesc_msgs/VescState
    # Vedder VESC open source motor controller state (telemetry)
    
    # fault codes
    int32 FAULT_CODE_NONE=0
    int32 FAULT_CODE_OVER_VOLTAGE=1
    int32 FAULT_CODE_UNDER_VOLTAGE=2
    int32 FAULT_CODE_DRV8302=3
    int32 FAULT_CODE_ABS_OVER_CURRENT=4
    int32 FAULT_CODE_OVER_TEMP_FET=5
    int32 FAULT_CODE_OVER_TEMP_MOTOR=6
    
    float64 voltage_input        # input voltage (volt)
    float64 temperature_pcb      # temperature of printed circuit board (degrees Celsius)
    float64 current_motor        # motor current (ampere)
    float64 current_input        # input current (ampere)
    float64 speed                # motor electrical speed (revolutions per minute) 
    float64 duty_cycle           # duty cycle (0 to 1)
    float64 charge_drawn         # electric charge drawn from input (ampere-hour)
    float64 charge_regen         # electric charge regenerated to input (ampere-hour)
    float64 energy_drawn         # energy drawn from input (watt-hour)
    float64 energy_regen         # energy regenerated to input (watt-hour)
    float64 displacement         # net tachometer (counts)
    float64 distance_traveled    # total tachnometer (counts)
    int32   fault_code
    
    `;
  }

};

module.exports = VescStateStamped;
