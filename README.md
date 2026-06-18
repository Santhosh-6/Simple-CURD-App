# 📝 Simple CRUD App

A full-stack CRUD (Create, Read, Update, Delete) application developed using the MERN stack. This project allows users to add, view, edit, and delete records through a responsive web interface while storing data securely in MongoDB.

---

## 📌 Project Overview

The Simple CRUD App demonstrates the implementation of fundamental database operations using modern web technologies. It provides a complete workflow between frontend and backend components.

The application allows users to:

* Create new records
* View stored records
* Update existing data
* Delete records
* Store and retrieve data from MongoDB

This project was developed as a practical implementation of MERN stack concepts and full-stack development principles.

---

## 🚀 Features

✔ Create new records

✔ Read and display records

✔ Update existing data

✔ Delete records

✔ REST API integration

✔ Responsive user interface

✔ MongoDB database connectivity

✔ Dynamic frontend updates

✔ Full-stack architecture

---

## 🛠 Technologies Used

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Tools

* Git
* GitHub
* VS Code
* Thunder Client / Postman

---

## 📂 Project Structure

```bash
Simple-CURD-App/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙ Installation

Clone repository:

```bash
git clone https://github.com/Santhosh-6/Simple-CURD-App.git
```

Move into project directory:

```bash
cd Simple-CURD-App
```

Install backend dependencies:

```bash
cd server
npm install
```

Install frontend dependencies:

```bash
cd client
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the server folder:

```env
MONGO_URI=your_mongodb_connection_string

PORT=5000
```

---

## ▶ Running the Project

Start backend:

```bash
cd server
npm start
```

Start frontend:

```bash
cd client
npm start
```

Application runs on:

Frontend:

```bash
http://localhost:3000
```

Backend:

```bash
http://localhost:5000
```

---

## 🔄 Application Workflow

1. User enters data into form
2. Data is sent through API request
3. Backend processes request
4. MongoDB stores data
5. Stored records are displayed
6. User can edit or delete records

---

## 👨‍💻 Author

Santhosh S

GitHub:

https://github.com/Santhosh-6
