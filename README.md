# Relay — Real-Time Chat Application

A full-stack real-time messaging application built with the MERN stack. Relay brings authentication, instant messaging, and media sharing together in a modern chat experience.

**Live Demo:** [Try Relay](https://relay-2d3h.onrender.com)

## Features

-  **Real-Time Messaging** — Send and receive messages instantly using Socket.IO.
-  **Authentication** — User authentication powered by Clerk.
-  **Media Sharing** — Upload and share images and videos through ImageKit.
-  **Online Status** — Track online users using real-time socket connections.
-  **Persistent Storage** — Store users and messages in MongoDB.
-  **State Management** — Manage frontend application state with Zustand.
-  **Modern UI** — React-based interface styled with Tailwind CSS and HeroUI.
-  **Deployment** — Deployed on Render with Docker-based deployment.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, Tailwind CSS, HeroUI |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Clerk |
| Real-Time Communication | Socket.IO |
| State Management | Zustand |
| Media Storage | ImageKit |
| Deployment | Docker, Render |

## 🏗️ Architecture

Relay follows a client-server architecture:

1. **Frontend:** React provides the user interface and manages client-side state.
2. **Backend:** Express.js handles API requests, authentication-related middleware, and message operations.
3. **Database:** MongoDB stores application data and chat messages.
4. **Real-Time Layer:** Socket.IO delivers messages and online-status updates between connected users.
5. **Media Uploads:** ImageKit handles uploaded chat media.

## Getting Started

Follow these steps to run Relay locally.

### Prerequisites

- Node.js and npm
- A MongoDB database
- A Clerk application
- An ImageKit account for media uploads

### 1. Clone the repository

```bash
git clone <https://github.com/vihaanrawat/Relay>
cd IMessage
```

### 2. Install dependencies

Install the backend dependencies:

```bash
cd backend
npm install
```

Install the frontend dependencies:

```bash
cd ../frontend
npm install
```

### 3. Configure environment variables

Create the required `.env` files for the backend and frontend.

Configure your MongoDB connection, Clerk credentials, ImageKit private key, and any frontend/backend URLs required by your application.

Use the environment variable names expected by your source code. **Never commit real credentials or `.env` files to GitHub.**

### 4. Run the application

Start the backend using the development script defined in `backend/package.json`:

```bash
cd backend
npm run dev
```

In another terminal, start the frontend using the development script defined in `frontend/package.json`:

```bash
cd frontend
npm run dev
```

Open the local frontend URL shown in your terminal.

> If your project uses different folder names or npm scripts, adjust these commands to match your repository.

## 🌐 Live Demo

**[Open Relay](https://relay-2d3h.onrender.com)**

The live application depends on the availability of its hosting service and configured third-party services.

## What I Learned

Building Relay helped me explore how a full-stack application works beyond the frontend:

- Designing and connecting REST APIs.
- Working with MongoDB and Mongoose models.
- Implementing authentication with Clerk.
- Building real-time communication with Socket.IO.
- Handling media uploads with ImageKit and Multer.
- Managing frontend state with Zustand.
- Configuring environment variables and CORS.
- Containerizing and deploying an application using Docker and Render.
- Debugging integration issues across the frontend, backend, database, and deployment environment.

## Future Improvements

- Read receipts and message delivery indicators.
- Typing indicators.
- Message editing and deletion.
- Improved mobile chat experience.
- Additional chat and notification features.

## 👨‍💻 Author

**Vihaan Rawat**

Computer Science & Engineering student interested in full-stack development, backend engineering, and building practical projects.

---

*Built to learn, experiment, debug, and understand how real-world full-stack applications work.*
