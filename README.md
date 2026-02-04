# 🌐 Personal Portfolio Website

A modern, responsive **developer portfolio website** built to showcase projects, skills, and experience — with a fully functional **contact form backed by MongoDB and email integration**.

This project is designed with clean UI, scalable backend architecture, and production-ready practices.

---

## 🔗 Live Preview
> _(Add your deployed link here once live)_  
Example: https://your-portfolio.vercel.app

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

### Tools & Services
![Nodemailer](https://img.shields.io/badge/Nodemailer-0A66C2?style=flat)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## ✨ Features

- Responsive and modern UI
- Smooth navigation and clean layout
- Dedicated **Experience** and **Projects** sections
- Fully functional **Contact Form**
- Backend API built with Express
- Messages stored securely in MongoDB Atlas
- Email notifications using Nodemailer
- Environment-based configuration for security

---

## 📂 Project Structure
My_portfolio/
├── src/ # Frontend (React)
│ ├── components/
│ ├── pages/
│ ├── index.css
│ └── main.jsx
│
├── portfolio-backend/ # Backend (Node + Express)
│ ├── config/
│ │ ├── db.js
│ │ └── email.js
│ ├── controllers/
│ │ └── contactController.js
│ ├── models/
│ │ └── Contact.js
│ ├── routes/
│ ├── server.js
│ ├── package.json
│ └── .env.example
│
├── .gitignore
└── README.md
---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Anni-san/My_portfolio.git
cd My_portfolio
```
2️⃣ Frontend Setup
npm install
npm run dev

3️⃣ Backend Setup
cd portfolio-backend
npm install
npm run dev

4️⃣ Environment Variables

Create a .env file inside portfolio-backend/ using .env.example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

## 🚀 Deployment

![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat)

🔗 **Live Website:**  
https://coming-soon.com

## 🔍 Architecture Overview

The application follows a clean separation of concerns:

- **Frontend** handles UI, form validation, and API requests
- **Backend** manages routing, data persistence, and email logic
- **MongoDB Atlas** acts as the primary data store
- **Nodemailer** is triggered only after successful database writes

This ensures reliability, scalability, and real-world production behavior.

