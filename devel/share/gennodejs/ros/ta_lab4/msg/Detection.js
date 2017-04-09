// Auto-generated. Do not edit!

// (in-package ta_lab4.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Detection {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.w = 0.0;
    this.h = 0.0;
    this.error_center = 0.0;
    this.error_size = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Detection
    // Serialize message field [x]
    bufferInfo = _serializer.float64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float64(obj.y, bufferInfo);
    // Serialize message field [w]
    bufferInfo = _serializer.float64(obj.w, bufferInfo);
    // Serialize message field [h]
    bufferInfo = _serializer.float64(obj.h, bufferInfo);
    // Serialize message field [error_center]
    bufferInfo = _serializer.float64(obj.error_center, bufferInfo);
    // Serialize message field [error_size]
    bufferInfo = _serializer.float64(obj.error_size, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Detection
    let tmp;
    let len;
    let data = new Detection();
    // Deserialize message field [x]
    tmp = _deserializer.float64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [w]
    tmp = _deserializer.float64(buffer);
    data.w = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [h]
    tmp = _deserializer.float64(buffer);
    data.h = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error_center]
    tmp = _deserializer.float64(buffer);
    data.error_center = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error_size]
    tmp = _deserializer.float64(buffer);
    data.error_size = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ta_lab4/Detection';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e34f6a3e4ec965d0bc49da004c6abdbc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 x
    float64 y
    float64 w
    float64 h
    float64 error_center
    float64 error_size
    
    
    
    `;
  }

};

module.exports = Detection;
