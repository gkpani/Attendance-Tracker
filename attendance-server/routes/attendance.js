const express = require('express');
const Attendance = require('../models/Attendance');
const auth = require('../middleware/auth');
const router = express.Router();

// Check In
router.post('/checkin', auth, async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const today = new Date().toISOString().split('T')[0];

    let record = await Attendance.findOne({ employee: req.user.id, date: today });
    if (record?.checkIn?.time) return res.status(400).json({ msg: 'Already checked in today' });

    if (!record) {
      record = new Attendance({ employee: req.user.id, date: today });
    }
    record.checkIn = { time: new Date(), latitude, longitude };
    await record.save();
    res.json(record);
  } catch (err) { res.status(500).json({ msg: err.message }); }
});

// Check Out
router.post('/checkout', auth, async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const today = new Date().toISOString().split('T')[0];

    const record = await Attendance.findOne({ employee: req.user.id, date: today });
    if (!record) return res.status(400).json({ msg: 'Not checked in yet' });
    if (record.checkOut?.time) return res.status(400).json({ msg: 'Already checked out' });

    record.checkOut = { time: new Date(), latitude, longitude };
    await record.save();
    res.json(record);
  } catch (err) { res.status(500).json({ msg: err.message }); }
});

// My history
router.get('/my-history', auth, async (req, res) => {
  const records = await Attendance.find({ employee: req.user.id }).sort({ date: -1 });
  res.json(records);
});

// Admin - all logs with filter
router.get('/all', auth, async (req, res) => {
  if (req.user.role!== 'admin') return res.status(403).json({ msg: 'Admin only' });
  const { employeeId, date } = req.query;
  let filter = {};
  if (employeeId) filter.employee = employeeId;
  if (date) filter.date = date;
  const records = await Attendance.find(filter).populate('employee', 'name email').sort({ date: -1 });
  res.json(records);
});

module.exports = router;