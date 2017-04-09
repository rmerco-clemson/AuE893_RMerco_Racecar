// Auto-generated. Do not edit!

// (in-package vesc_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class VescState {
  constructor() {
    this.voltage_input = 0.0;
    this.temperature_pcb = 0.0;
    this.current_motor = 0.0;
    this.current_input = 0.0;
    this.speed = 0.0;
    this.duty_cycle = 0.0;
    this.charge_drawn = 0.0;
    this.charge_regen = 0.0;
    this.energy_drawn = 0.0;
    this.energy_regen = 0.0;
    this.displacement = 0.0;
    this.distance_traveled = 0.0;
    this.fault_code = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VescState
    // Serialize message field [voltage_input]
    bufferInfo = _serializer.float64(obj.voltage_input, bufferInfo);
    // Serialize message field [temperature_pcb]
    bufferInfo = _serializer.float64(obj.temperature_pcb, bufferInfo);
    // Serialize message field [current_motor]
    bufferInfo = _serializer.float64(obj.current_motor, bufferInfo);
    // Serialize message field [current_input]
    bufferInfo = _serializer.float64(obj.current_input, bufferInfo);
    // Serialize message field [speed]
    bufferInfo = _serializer.float64(obj.speed, bufferInfo);
    // Serialize message field [duty_cycle]
    bufferInfo = _serializer.float64(obj.duty_cycle, bufferInfo);
    // Serialize message field [charge_drawn]
    bufferInfo = _serializer.float64(obj.charge_drawn, bufferInfo);
    // Serialize message field [charge_regen]
    bufferInfo = _serializer.float64(obj.charge_regen, bufferInfo);
    // Serialize message field [energy_drawn]
    bufferInfo = _serializer.float64(obj.energy_drawn, bufferInfo);
    // Serialize message field [energy_regen]
    bufferInfo = _serializer.float64(obj.energy_regen, bufferInfo);
    // Serialize message field [displacement]
    bufferInfo = _serializer.float64(obj.displacement, bufferInfo);
    // Serialize message field [distance_traveled]
    bufferInfo = _serializer.float64(obj.distance_traveled, bufferInfo);
    // Serialize message field [fault_code]
    bufferInfo = _serializer.int32(obj.fault_code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VescState
    let tmp;
    let len;
    let data = new VescState();
    // Deserialize message field [voltage_input]
    tmp = _deserializer.float64(buffer);
    data.voltage_input = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [temperature_pcb]
    tmp = _deserializer.float64(buffer);
    data.temperature_pcb = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [current_motor]
    tmp = _deserializer.float64(buffer);
    data.current_motor = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [current_input]
    tmp = _deserializer.float64(buffer);
    data.current_input = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [speed]
    tmp = _deserializer.float64(buffer);
    data.speed = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [duty_cycle]
    tmp = _deserializer.float64(buffer);
    data.duty_cycle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [charge_drawn]
    tmp = _deserializer.float64(buffer);
    data.charge_drawn = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [charge_regen]
    tmp = _deserializer.float64(buffer);
    data.charge_regen = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [energy_drawn]
    tmp = _deserializer.float64(buffer);
    data.energy_drawn = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [energy_regen]
    tmp = _deserializer.float64(buffer);
    data.energy_regen = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [displacement]
    tmp = _deserializer.float64(buffer);
    data.displacement = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [distance_traveled]
    tmp = _deserializer.float64(buffer);
    data.distance_traveled = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fault_code]
    tmp = _deserializer.int32(buffer);
    data.fault_code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'vesc_msgs/VescState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '81214bb4c1945e7c159bd76ec397ac04';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

// Constants for message
VescState.Constants = {
  FAULT_CODE_NONE: 0,
  FAULT_CODE_OVER_VOLTAGE: 1,
  FAULT_CODE_UNDER_VOLTAGE: 2,
  FAULT_CODE_DRV8302: 3,
  FAULT_CODE_ABS_OVER_CURRENT: 4,
  FAULT_CODE_OVER_TEMP_FET: 5,
  FAULT_CODE_OVER_TEMP_MOTOR: 6,
}

module.exports = VescState;
