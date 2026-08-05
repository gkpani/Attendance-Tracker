const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function test() {
  const base = 'http://localhost:5000/api';

  console.log('1. Creating Admin...');
  let res = await fetch(`${base}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Admin', email: 'admin@company.com', password: 'admin123', role: 'admin' })
  });
  console.log('Admin:', await res.json());

  console.log('\n2. Creating Employee Ramesh...');
  res = await fetch(`${base}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ramesh Kumar', email: 'ramesh@company.com', password: 'ramesh123', role: 'employee' })
  });
  console.log('Employee:', await res.json());

  console.log('\n3. Login as Ramesh...');
  res = await fetch(`${base}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'ramesh@company.com', password: 'ramesh123' })
  });
  const loginData = await res.json();
  console.log('Login:', loginData);
  const token = loginData.token;

  if (!token) {
    console.log('Login failed, stop here');
    return;
  }

  console.log('\n4. Check-In with GPS...');
  res = await fetch(`${base}/attendance/checkin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ latitude: 23.0225, longitude: 72.5714 })
  });
  console.log('Check-In:', await res.json());

  console.log('\n5. My History...');
  res = await fetch(`${base}/attendance/my-history`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('History:', await res.json());

  console.log('\n=== ALL TESTS DONE === Take screenshot for Lancerank!');
}

test();