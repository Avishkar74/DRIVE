# DRIVE - Cloud Storage System

## Overview
DRIVE is a web-based cloud storage system that allows users to securely upload, store, and download files. It features user authentication, file management, and secure storage using Firebase Storage.

## Features
- **User Authentication**: Register, login, and logout functionality
- **Secure File Storage**: Upload files to Firebase Storage
- **File Access Control**: Users can only access their own files
- **Download Functionality**: Generate temporary secure download URLs

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Storage**: Firebase Storage
- **Authentication**: JWT (JSON Web Tokens)
- **Frontend**: EJS templates, TailwindCSS, Flowbite UI

## Project Structure
```
app.js                # Main application entry point
config/               # Configuration files
  ├── db.js           # MongoDB connection setup
  ├── firebase.config.js  # Firebase configuration
  └── multer.config.js    # File upload configuration
middlewares/          # Middleware functions
  └── auth.js         # Authentication middleware
models/               # Database models
  ├── files.model.js  # File schema and model
  └── user.model.js   # User schema and model
routes/               # API routes
  ├── index.route.js  # File operations routes
  └── user.route.js   # User authentication routes
views/                # EJS templates
  ├── home.ejs        # Home page with file list and upload
  ├── login.ejs       # User login page
  └── register.ejs    # User registration page
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Firebase account with Storage enabled

### Environment Variables
Create a `.env` file in the root directory and add:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Firebase Configuration
1. Create a Firebase project
2. Enable Storage
3. Generate a service account key
4. Save it as `drive-firebase.json` in the project root

### Installation Steps
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node app.js
   ```
4. Visit `http://localhost:3000` in your browser

## API Endpoints

### User Authentication
- `GET /user/register` - Display registration page
- `POST /user/register` - Register new user
- `GET /user/login` - Display login page
- `POST /user/login` - Authenticate user
- `GET /user/logout` - Log out user

### File Operations
- `GET /home` - Display home page with file list
- `POST /upload-file` - Upload a file
- `GET /download/:path` - Download a file

## User Flow
1. Register a new account
2. Login with credentials
3. Upload files from the home page
4. View and download your files

## Security Features
- Passwords are hashed using bcrypt
- JWT authentication for API access
- File access is restricted to the owner
- Temporary signed URLs for downloads

## Known Issues and Limitations
- Large file uploads may timeout
- No file previews yet
- No sharing functionality between users

## Future Enhancements
- File sharing between users
- File preview functionality
- Folder organization
- File versioning

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributors
- Your Name - Initial work and development
