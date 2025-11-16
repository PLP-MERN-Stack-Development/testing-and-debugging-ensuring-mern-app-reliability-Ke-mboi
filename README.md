# MERN Bug Tracker with Testing & Debugging

This project is a **Bug Tracker** application built with the MERN stack (MongoDB, Express, React, Node.js).  
It demonstrates comprehensive testing strategies (unit, integration, and end-to-end tests) and debugging techniques for a robust and reliable application.

---

## **Table of Contents**
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Backend Testing](#backend-testing)
- [Frontend Testing](#frontend-testing)
- [End-to-End Testing](#end-to-end-testing)
- [Debugging Techniques](#debugging-techniques)
- [Error Handling](#error-handling)
- [Dependencies](#dependencies)

---

## **Project Structure**

mern-bug-tracker/
├── client/ # React front-end
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── tests/
│ │ │ ├── unit/ # Unit tests
│ │ │ └── integration/ # Integration tests
│ │ ├── App.jsx # Main app component
│ │ └── index.js # React entry point
│ └── cypress/ # End-to-end tests
├── server/ # Express.js back-end
│ ├── src/
│ │ ├── controllers/ # Route controllers
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # API routes
│ │ └── middleware/ # Custom middleware
│ └── tests/
│ ├── unit/ # Unit tests
│ └── integration/ # Integration tests
├── jest.config.js # Jest configuration
└── package.json # Project dependencies

yaml
Copy code

---

## **Features**

- Create, update, and delete bug reports
- Update bug status (Open, In-Progress, Resolved)
- Live bug list updates on frontend
- Comprehensive testing:
  - Backend: Unit & integration tests
  - Frontend: Unit & integration tests
  - End-to-end tests using Cypress
- Error handling:
  - Backend middleware for errors
  - Frontend React Error Boundaries

---

## **Getting Started**

### **Backend**
1. Navigate to the server folder:
```bash
cd server
Install dependencies:

bash
Copy code
npm install
Start MongoDB (ensure mongod is running):

bash
Copy code
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath "C:\Users\<your-username>\data\db"
Start the server:

bash
Copy code
node server.js
Frontend
Navigate to the client folder:

bash
Copy code
cd client
Install dependencies:

bash
Copy code
npm install
Start React development server:

bash
Copy code
npm start
Open your browser at:

arduino
Copy code
http://localhost:3000
Backend Testing
Unit tests for helper functions

Integration tests for API endpoints

Run all tests:

bash
Copy code
npx jest
Frontend Testing
Unit tests for React components

Integration tests for API calls and UI updates

Run tests:

bash
Copy code
npm test
End-to-End Testing (E2E)
Cypress tests simulate user interactions:

Adding, updating, and deleting bugs

Validating UI behavior

Run Cypress:

bash
Copy code
npx cypress open
Select bugTracker.spec.js to run the tests.

Debugging Techniques
Console logs for tracking values

Chrome DevTools for inspecting components and network requests

Node.js Inspector for server-side debugging:

bash
Copy code
node --inspect server.js
React Error Boundaries to gracefully handle runtime errors

Error Handling
Backend: Express middleware catches errors and sends structured responses

Frontend: ErrorBoundary component displays fallback UI and logs errors

Dependencies
Backend

express

mongoose

dotenv

jest

supertest

Frontend

react

axios

jest

react-testing-library

cypress (for E2E)