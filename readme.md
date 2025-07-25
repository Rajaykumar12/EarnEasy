# EarnEasy 🚀💼

<div align="center">

![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.18-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-5.0-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Google OAuth](https://img.shields.io/badge/Google-OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#️-architecture)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Configuration](#️-configuration)
- [Authentication Flow](#-authentication-flow)
- [API Documentation](#-api-documentation)
- [Security](#-security)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [Support](#-support)

---

## 📋 Overview

**EarnEasy** is a modern e-commerce marketplace platform designed for scalability, security, and exceptional user experience. Built with modern web technologies, it provides a foundation for online marketplace management with Google OAuth authentication, JWT session management, and clean architecture.

### 🎯 Mission Statement
To provide a robust, scalable, and secure marketplace platform that empowers businesses to create exceptional e-commerce experiences while maintaining the highest standards of security and performance.


## ✨ Key Features

### 🔐 Authentication & Security
- 🛡️ **Google OAuth 2.0 Integration** - Secure social login with Google
- 🍪 **HTTP-Only Cookie Authentication** - JWT tokens stored in secure HTTP-only cookies for XSS protection
- � **Token Blacklisting** - Secure logout with server-side token invalidation
- 🔒 **Dual Authentication Support** - Both cookie and header-based authentication for flexibility
- 🛡️ **Security Headers** - CORS protection with production-ready cookie settings
- 🔐 **Data Encryption** - Secure data transmission and storage
- 📊 **Session Management** - Centralized authentication handling with AuthContext

### 🛍️ E-commerce Capabilities
- 🏪 **Multi-vendor Marketplace** - Foundation for multiple sellers (structure ready)
- 📦 **Product Management** - Complete CRUD operations for products
- 🔍 **Advanced Search & Filtering** - Basic search with category filtering
- 📱 **Mobile-First Design** - Responsive UI for all device types
- 🛒 **Shopping Cart** - Persistent cart functionality
- 📊 **User Profiles** - Comprehensive user management
- 🎨 **Modern UI/UX** - Material-UI components with custom theming

### 🛠️ Developer Experience
- ⚡ **Hot Module Replacement** - Vite for instant development feedback
- 🧩 **Modular Architecture** - Clean separation of concerns
- 📦 **RESTful API Design** - OpenAPI-ready endpoints
- 🔄 **CI/CD Ready** - GitHub Actions configuration ready
- 🧪 **Testing Framework** - Test structure ready for implementation
- 📝 **Code Quality** - ESLint and Prettier configuration

---

## 🏗️ Architecture

### System Architecture
```
┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│     Frontend       │    │      Backend       │    │      Database      │
│    (React SPA)     │◄──►│   (Node.js API)    │◄──►│      (MongoDB)     │
└────────────────────┘    └────────────────────┘    └────────────────────┘
         │                        │                        │
         │                        │                        │
   ┌──────────────┐         ┌─────────────┐          ┌──────────────┐
   │  Material UI │         │   Express   │          │   Mongoose   │
   │    (UI)      │         │ Middleware  │          │    ODM       │
   └──────────────┘         └─────────────┘          └──────────────┘
```

### Technology Stack
- **Frontend**: React 18 + Vite + Material-UI
- **Backend**: Node.js + Express.js + Mongoose  
- **Database**: MongoDB
- **Authentication**: HTTP-Only Cookies + JWT + Google OAuth 2.0
- **Development**: Hot reloading, ESM modules, modern JS/ES6+

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 | UI library with hooks and modern features |
| **Build Tool** | Vite | Fast development server and build tool |
| **UI Framework** | Material-UI (MUI) | Professional component library |
| **Routing** | React Router | Client-side routing |
| **HTTP Client** | Axios | API communication |
| **State Management** | React Context | Global state management |
| **Backend** | Node.js + Express | Server runtime and web framework |
| **Database** | MongoDB + Mongoose | NoSQL database with ODM |
| **Authentication** | HTTP-Only Cookies + JWT + Google OAuth | Secure authentication with XSS protection |
| **Security** | CORS + JWT | Security headers and token validation |
| **Development** | ESLint + Prettier | Code quality and formatting |

---

## 📁 Project Structure

```
EarnEasy/
├── 📁 backend/
│   ├── 📁 controllers/          # Route handlers and business logic
│   │   ├── authController.js    # Authentication logic
│   │   └── productController.js # Product management
│   ├── 📁 middleware/           # Custom middleware
│   │   └── authMiddleware.js    # JWT and session management
│   ├── 📁 models/              # Database models
│   │   ├── authModel.js        # User authentication model
│   │   ├── Products.js         # Product data model
│   │   └── dbConnections.js    # Database connection
│   ├── 📁 routes/              # API route definitions
│   │   ├── authRouter.js       # Authentication routes (consolidated)
│   │   ├── productRoutes.js    # Product API routes
│   │   └── profileRoutes.js    # User profile routes
│   ├── 📁 utils/               # Utility functions
│   │   └── googleClient.js     # Google OAuth configuration
│   ├── index.js               # Server entry point
│   ├── package.json           # Backend dependencies
│   ├── seeder.js             # Database seeding script
│   └── .env                  # Environment variables
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   │   ├── BottomNavBar.jsx
│   │   │   ├── CategoriesBar.jsx
│   │   │   ├── GoogleLogin.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── SessionInfo.jsx
│   │   ├── 📁 pages/           # Page components
│   │   │   ├── LandingPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── ExplorePage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── AddPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── 📁 context/         # React context providers
│   │   │   └── AuthContext.jsx # Authentication context (was SessionContext)
│   │   ├── 📁 utils/           # Frontend utilities
│   │   │   ├── PrivateRoute.jsx
│   │   │   └── RefreshHandler.jsx
│   │   ├── 📁 api/             # API service layer
│   │   │   └── apiFetch.js
│   │   ├── App.jsx            # Main application component
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   ├── 📁 public/             # Static assets
│   │   ├── 📁 images/         # Product and UI images
│   │   └── vite.svg
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   └── eslint.config.js      # ESLint configuration
│
├── README.md                 # Project documentation
└── .gitignore               # Git ignore rules
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **MongoDB** (v4.4 or higher)
- **Google OAuth Credentials** (Client ID & Secret)
- **Git** for version control

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/so-sc/EarnEasy.git
   cd EarnEasy
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   Create `.env` files as described in the [Configuration](#️-configuration) section.

5. **Database Setup**
   ```bash
   # Start MongoDB service
   mongod
   
   # Seed database (optional)
   cd backend
   node seeder.js
   ```

6. **Start Development Servers**
   ```bash
   # Backend (Terminal 1)
   cd backend
   npm start
   # Server runs on http://localhost:3000
   
   # Frontend (Terminal 2)
   cd frontend
   npm run dev
   # App runs on http://localhost:5173
   ```

---

## ⚙️ Configuration

### Backend Environment (`.env`)
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/earneasy

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters
JWT_ACCESS_EXPIRE=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Security (Optional)
CORS_ORIGIN=http://localhost:5173
```

### Frontend Environment (`.env`)
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000

# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com

# Environment
VITE_NODE_ENV=development
```

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized origins and redirect URIs

---

## 🔐 Authentication Flow

### Google OAuth Flow
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Google
    participant Database

    User->>Frontend: Click "Sign in with Google"
    Frontend->>Google: Redirect to Google OAuth
    Google->>User: Show consent screen
    User->>Google: Grant permissions
    Google->>Backend: Send authorization code
    Backend->>Google: Exchange code for tokens
    Google->>Backend: Return user info & tokens
    Backend->>Database: Find or create user
    Database->>Backend: Return user data
    Backend->>Frontend: Set HTTP-only cookie + return user info
    Frontend->>User: Redirect to dashboard
```

### Cookie-Based Authentication
- **Token Storage**: JWT tokens stored in secure HTTP-only cookies
- **XSS Protection**: Cookies cannot be accessed by client-side JavaScript
- **Automatic Handling**: Browser automatically sends cookies with requests
- **Token Blacklisting**: Server-side token invalidation on logout
- **Dual Support**: Both cookie and header authentication for API flexibility

---

## 📊 API Documentation

### Authentication Endpoints
```http
POST   /auth              # Google OAuth callback
GET    /session/validate  # Validate current session
POST   /session/logout    # Logout user
```

### Product Endpoints
```http
GET    /products          # Get all products
POST   /products          # Create new product (auth required)
GET    /products/:id      # Get product by ID
PUT    /products/:id      # Update product (auth required)
DELETE /products/:id      # Delete product (admin only)
```

### User Endpoints
```http
GET    /users/profile     # Get current user profile
PUT    /users/profile     # Update user profile
GET    /users/sessions    # Get active sessions
```

### Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

---

## 🔒 Security

### Authentication Security
- **JWT Tokens**: Stateless authentication with 7-day expiry
- **Google OAuth**: Secure third-party authentication
- **Session Management**: JWT-based session tracking

### Application Security
- **CORS Protection**: Configured for specific origins
- **Input Validation**: Basic server-side validation
- **Security Headers**: CORS (ready for additional headers)
- **Error Handling**: Secure error messages without sensitive data

### Data Protection
- **Environment Variables**: Sensitive data in `.env` files
- **Database Security**: MongoDB connection string encryption
- **API Rate Limiting**: (Ready for implementation)
- **Audit Logging**: (Ready for implementation)

---

## 📈 Performance

### Optimization Strategies
- **Frontend**: Code splitting, lazy loading, image optimization
- **Backend**: Database indexing, query optimization, caching
- **Database**: Proper indexing, aggregation pipelines
- **Security**: Efficient JWT validation, session management

### Monitoring & Analytics
- **Performance Metrics**: Response times, error rates
- **User Analytics**: Session tracking, user behavior
- **Server Monitoring**: CPU, memory, database performance
- **Error Tracking**: Centralized error logging and alerts

---

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards
- **ESLint**: JavaScript linting and code quality
- **Prettier**: Code formatting consistency
- **Commit Messages**: Conventional commit format
- **Documentation**: Update README and code comments

### Review Process
- **Code Review**: All PRs require review
- **Testing**: Automated tests must pass
- **Security**: Security review for sensitive changes
- **Performance**: Performance impact assessment

---

##  Support

### Getting Help
- **Documentation**: This README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/so-sc/EarnEasy)
- **Discussions**: [GitHub Discussions](https://github.com/so-sc/EarnEasy/discussions)

### Community
- **Contributors**: Thank you to all contributors who have helped make this project better
- **Feedback**: We welcome feedback and suggestions for improvement
- **Bug Reports**: Please report bugs with detailed reproduction steps

---

<div align="center">

**Made with ❤️ by the EarnEasy Team**

[⭐ Star this repo](https://github.com/so-sc/EarnEasy) | [🐛 Report Bug](https://github.com/so-sc/EarnEasy/issues) | [📈 Request Feature](https://github.com/so-sc/EarnEasy/issues)

</div>
