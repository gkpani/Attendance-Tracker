const path = require('path');
const dns = require('dns');
// Force Node to use Google DNS, not your ISP DNS
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
console.log('URI found:', uri ? 'YES' : 'NO');

mongoose.connect(uri)
.then(() => { console.log('MongoDB connected successfully'); process.exit(0); })
.catch(err => { console.error('Connection failed:', err.message); process.exit(1); });