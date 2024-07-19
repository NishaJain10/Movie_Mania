# Movie Mania

## Overview
Welcome to Movie Mania, a full-stack movie website built using the MERN stack (MongoDB, Express, React, Node.js). This application offers a seamless user experience with a robust set of features, designed to keep users engaged and informed about the latest movies.

## Features

### 🔒 User Authentication & Authorization
- **Secure registration and login** processes.
- Data stored in a MongoDB database.
- JSON Web Tokens (JWT) ensure user verification and secure access control.

### 📊 Data Visualization
- Dynamic content display using React.
- Fetch and present movie details, user reviews, and ratings in an engaging format.
- Real-time updates to keep users informed about the latest movies.

### 🛠️ CRUD Functionality
- Full CRUD operations for movie and user data.
- Admin panel provides exclusive tools for managing these operations efficiently.

### 🛡️ Admin Panel
- Secure admin dashboard for managing user information and movie listings.
- Admins can edit or delete user data, view and respond to messages, and manage movie content.
- Unauthorized users attempting to access this panel will be denied.

### 📬 Contact Page
- Logged-in users can send messages through a dedicated contact page.
- Messages are managed in the admin panel for prompt and organized communication.

### 🎥 Service Page
- Detailed movie service information dynamically displayed.
- Comprehensive details about each movie, including descriptions, genres, and release dates.

### ❗ Error Handling
- Robust error handling mechanisms ensure a smooth user experience.
- Clear and informative error messages guide users through any issues.

### 🗣️ User Feedback
- Instant feedback provided through toast messages for actions like login, registration, and error occurrences.
- Enhances user interaction and satisfaction.

### 🔗 API Integration
- Thorough API testing with Postman ensures reliable backend functionality.
- Seamless integration with the frontend delivers a consistent and robust user experience.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js
- MongoDB

### Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/NishaJain10/Movie_Mania.git
2. **Install NPM packages for both frontend and backend:**
   ```sh
   npm install
   cd client
   npm run dev
3. **Start the development server:**
   ```sh
   cd server
   npm nodemon server.js

### Usage

1.	Open your browser and navigate to http://localhost:5173.
2.	Register for a new account or log in if you already have an account.
3.	Explore features like viewing movie services, sending messages, and, if you’re an admin, managing user data and messages.


