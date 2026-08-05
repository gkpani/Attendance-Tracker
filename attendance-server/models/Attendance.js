const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  checkIn: {
    time: Date,
    latitude: Number,
    longitude: Number,
    address: String
  },
  checkOut: {
    time: Date,
    latitude: Number,
    longitude: Number,
    address: String
  },
  status: { type: String, default: 'present' }
}, { timestamps: true });

attendanceSchema.index({ employee: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', attendanceSchema);