import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('');
  const [logs, setLogs] = useState([]);
  const [email, setEmail] = useState('admin@company.com');
  const [password, setPassword] = useState('admin123');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setToken(res.data.token);
    } catch (e) { alert('Login failed - is server.js running on port 5000?'); }
  };

  const fetchLogs = async () => {
    const res = await axios.get('http://localhost:5000/api/attendance/all', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setLogs(res.data);
  };

  useEffect(() => { if (token) fetchLogs(); }, [token]);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Attendance Tracker - Admin Dashboard</h1>
      <p>Backend: Node.js + MongoDB | Frontend: React</p>
      {!token ? (
        <div>
          <input style={{padding:8, marginRight:10}} value={email} onChange={e=>setEmail(e.target.value)} />
          <input style={{padding:8, marginRight:10}} type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button onClick={login} style={{padding:'8px 16px'}}>Login as Admin</button>
        </div>
      ) : (
        <div>
          <button onClick={fetchLogs} style={{padding:'8px 16px'}}>Refresh Logs</button>
          <table border="1" cellPadding="8" style={{ marginTop: 20, width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr><th>Date</th><th>Employee</th><th>Check In Time</th><th>Location on Map</th></tr></thead>
            <tbody>
            {logs.map((l, i) => (
              <tr key={i}>
                <td>{l.date}</td>
                <td>{l.employee?.name} ({l.employee?.email})</td>
                <td>{l.checkIn?.time ? new Date(l.checkIn.time).toLocaleString() : '-'}</td>
                <td>
                  {l.checkIn?.latitude ? (
                    <a target="_blank" href={`https://www.google.com/maps?q=${l.checkIn.latitude},${l.checkIn.longitude}`}>
                      View Map - {l.checkIn.latitude}, {l.checkIn.longitude}
                    </a>
                  ) : '-'}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          {logs.length===0 && <p>No logs yet - run test-full.js first</p>}
        </div>
      )}
    </div>
  );
}
export default App;