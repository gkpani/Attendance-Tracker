# 📍 Attendance Tracker System with GPS

A **full-stack MERN employee attendance management system** with **real-time GPS location tracking**, **secure JWT authentication**, and an **admin dashboard** for monitoring employee attendance records.

---

## 🚀 Project Highlights

- ⭐ **LanceRank:** **1/1 Vouched Review • 5 Stars**
- 🔗 **GitHub Repository:** [Attendance-Tracker](https://github.com/gkpani/Attendance-Tracker)
- 📍 **GPS Verified:** **23.0225, 72.5714**
  - *Ahmedabad, Gujarat — Sabarmati Riverfront Area*
- 🛠️ **Technology Stack:** **React • Vite • Node.js • Express • MongoDB Atlas • JWT**

---

## 🎯 Purpose

This project demonstrates a practical **field employee attendance solution** where employees can check in and check out using their device GPS, while administrators can monitor attendance records through a centralized dashboard.

---
## 🧪 Demo / Tested Locally

The application has been successfully tested in a local development environment.

- **Backend API**
  - Node.js + Express server running on **`localhost:5000`**

- **Frontend Dashboard**
  - React + Vite application running on **`localhost:5173`**

- **Database Connectivity**
  - **MongoDB Atlas** connection verified successfully

- **GPS Verification**
  - Browser geolocation captured and displayed on **Google Maps** with real-time coordinates

---

## 📸 Screenshots

### 1. Terminal - Backend Running: Connected + ALL TESTS DONE
Backend server running on port 5000, MongoDB Atlas connected, full attendance flow tested - Check-in with GPS.

🔗 [Backend Terminal Tests](./screenshots/01-terminal.png)

### 2. Admin Dashboard: Table showing Ramesh Kumar | View Map - 23.0225, 72.5714
Admin dashboard displaying employee attendance logs with date, employee email, check-in time, and clickable Map location.

🔗 [Admin Dashboard](./screenshots/02-dashboard.png)

### 3. GPS Proof: Google Maps pin at 23°01'21.0"N 72°34'17.0"E - Ahmedabad
GPS verification - Clicking "View Map" opens exact location on Google Maps: 23.022500, 72.571400 near Sabarmati Riverfront, Ahmedabad.

🔗 [GPS Map Proof](./screenshots/03-gps-map.png)


---
## ✨ Key Features

- **Employee Authentication**
  - Secure login using **JWT (JSON Web Tokens)**.

- **GPS-Based Attendance**
  - Employees can perform **Check-In** and **Check-Out** with live GPS coordinates.

- **Automatic Location Capture**
  - Stores **latitude, longitude, date, and timestamp** automatically.

- **Admin Dashboard**
  - Displays attendance records in a structured table with employee details.

- **Google Maps Integration**
  - Clickable map links open the exact attendance location in **Google Maps**.

- **Attendance History API**
  - Employees can view their personal attendance history through protected APIs.

- **Cloud Database**
  - Uses **MongoDB Atlas** for secure cloud-based data storage and management.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose, JWT Authentication
- **Frontend:** React, Vite, CSS
- **Features:** Employee Check-in/out, GPS Location Tracking, Admin Dashboard, My History API

## 🔒 Security
- `.env` and `node_modules` are gitignored
- Use `.env.example` as template - contains `<password>` placeholder only
- No real secrets committed to repo

## 🚀 How to Run Locally
```bash
# Clone
git clone https://github.com/gkpani/Attendance-Tracker.git

# Backend
cd attendance-server
npm install
# Create .env from .env.example and add your MongoDB URI
npm start

# Frontend (new terminal)
cd attendance-web
npm install
npm run dev

👨‍💻 Author
Gadadhar Kandhapani - MERN Stack Developer

GitHub: @gkpani
Lancerank: Vouched 5 Stars
Built with ❤️ - using clean, secure, and maintainable MERN stack practices
