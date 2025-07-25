

# Portfolio and Chat Application — Project Summary

## Project Goals

The main goal of this project is to create a dynamic personal portfolio and chat application using the MERN stack (MongoDB, Express, React, Node.js) ect,... This application is designed to:

- Showcase my skills, projects, and professional background.

- Provide an interactive platform where visitors can chat with me in real-time.

- Enable users to join the chatroom easily through social login options such as Google, Facebook, GitHub, and Instagram for improved accessibility and user engagement.

[LIVE DEMO](https://usanase-potofolio.vercel.app/)

[PICH DECK](https://www.canva.com/design/DAGuLvfEzRE/gge5jYmy8SnIlD1h9Bg09w/edit?utm_content=DAGuLvfEzRE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

**Current Status:**

- The backend is fully set up with Express, MongoDB, and Socket.io for real-time communication.

- The frontend is built with React, Vite, Tailwind CSS, and Framer Motion, providing a responsive and animated user interface.

- Real-time chat functionality is working: users can send and receive messages instantly.

- The contact form is implemented and successfully sends emails.

The app is deployed successfully:

- **Backend** deployed on Render.

* **Frontend** deployed on Vercel.

## Pending Features and Improvements

**Social Login Integration:**

Currently, users cannot yet join the chatroom via Google, Facebook, GitHub, or Instagram login. This critical feature is still under development and will significantly enhance user experience by allowing seamless authentication.

## UI/UX Enhancements:

Further styling and polish are needed to improve the overall look and feel of the application. This includes refining the design, improving responsiveness, and enhancing accessibility.

## Steps Followed to Build the Application

**Project Planning and Setup**

## Backend Development

- Added node.js , express, cors,dovenv,Helmet, Morgan dependencies.

- Connected to MongoDB using Mongoose.

- Created REST API routes for users, posts (blog), and contact form handling.

- Implemented email sending functionality via Nodemailer for contact form messages.

- Integrated Socket.io for real-time chat functionality: managing user connections, broadcasting messages, and tracking online users.

## Frontend Development

6 Created a React app using Vite for fast bundling and development.

- Installed and configured Tailwind CSS for styling and Framer Motion for smooth animations.

- Built core React components such as ChatRoom, handling message display, online users list, and sending messages via Socket.io client.

- Designed login buttons for social networks (Google, Facebook, GitHub, Instagram) as placeholders (social login logic to be implemented).

- Implemented the contact form UI and linked it to the backend email API.

## Deployment

- Deployed the backend on Render with environment variables and MongoDB Atlas connection.

- Deployed the frontend on Vercel, configuring build commands and project settings via the Vercel CLI.


## Application Structure

**Backend (Express + MongoDB + Socket.io)**

<code><pre>


server/
├── src/
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   ├── controllers/
│   ├── middleware/
│   │   ├── errorMiddleware.js  # Error handling middleware
│   ├── models/                 # Mongoose models (User, Post, etc.)
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   └── contactRoutes.js    # Contact form API
│   └── socket/
│       └── index.js            # Socket.io connection and event handling
├── .env                       # Environment variables (Mongo URI, email credentials, OAuth keys)
├── server.js                  # Main Express server with Socket.io integration
├── package.json

<pre><code>


