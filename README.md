
# 🗨️ The Talk App – Real-Time Chat Application

A full-featured real-time chat application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.IO**. This app allows users to connect, chat instantly, and view real-time typing status with a smooth and responsive interface.

---

## 🚀 Live Demo

🔗 [Live App](https://akshatportfoli0.netlify.app/)

---

## 🧰 Tech Stack

- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Real-Time:** Socket.IO
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Netlify (Frontend), Render (Backend)

---

## 🔑 Features

- ✅ Real-time messaging with Socket.IO
- 🧑‍💼 Verified user badge request system
- 🔒 JWT-based login and signup
- 📱 Fully responsive design
- 🧭 Clean UI with tabbed views for active users and messages

---

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/ak-sudo/chatAPP.git
cd chatAPP
```

### 2. Install dependencies

```bash
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```

### 3. Environment variables

Create a `.env` file in the `server` folder and add:

```env
PORT=5000
USERNAME=your_mongodb_username
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the development servers

```bash
# Start backend
cd server
npm run dev

# In a new terminal, start frontend
cd ../client
npm start
```

---

## 📂 Folder Structure

```bash
chatAPP/
├── client/        # React frontend
└── server/        # Node + Express backend
```

---

## 🚀 Deployment

### Frontend (Netlify)

1. Push `client` folder to GitHub
2. Connect Netlify to GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Backend (Render)

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repo
3. Set build command: `npm install`
4. Set start command: `node index.js` or `npm start`
5. Add environment variables in dashboard

---

## ✅ GitHub Actions (CI/CD)

You can optionally set up GitHub Actions for:
- Automated deployments
- Linting or testing on push
- Build and release pipelines

Example `.github/workflows/nodejs.yml` can be added as needed.

---

## 🛡 Badges

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Passing](https://img.shields.io/badge/build-passing-brightgreen)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to open a pull request or issue.

---

## 📬 Contact

👤 **Akshat Kala**  
📧 Reach me via LinkedIn: [linkedin.com/in/akshat706](https://linkedin.com/in/akshat706)  
🌐 Portfolio: [akshatportfoli0.netlify.app](https://akshatportfoli0.netlify.app)

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐️ Show your support

If you liked this project, please ⭐️ the repo to help others find it too!
