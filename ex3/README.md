# Family Reunification Form 

This repository contains files for a simple Family Reunification Form and a frontend application built with React. The Application is designed to handle CRUD operations (Create, Read, Update, Delete) for family reunification forms.

## Project Overview

### Backend (Express Server)

The backend serves as the server responsible for handling family reunification form operations.

- **Express Server**: The main server file (`app.js`) sets up the Express server, middleware, and routes for handling requests.

- **MongoDB Integration**: MongoDB is utilized as the data storage mechanism, with Mongoose for interacting with the database.

- **RESTful API Endpoints**: The API exposes endpoints for CRUD operations on family reunification forms, following RESTful principles.

### Frontend (React Application)

The frontend is built with React to provide an interactive user interface for interacting with the Family Reunification Form.

- **React Components**: The frontend consists of React components for different sections of the application, providing modularity and reusability.

- **Fetch Integration**: React components make fetch calls to the backend server using libraries like Axios or Fetch for data retrieval and manipulation.

- **State Management**: React state (useState hook) is used to manage the state of the application, including form data, error messages, and UI states.

- **Routing**: React Router is implemented for client-side routing, enabling navigation between different sections of the application.

## Project Structure

### Backend

- **app.js**: Entry point for the Express server.
- **routes/**: Contains route handlers for endpoints.
- **controllers/**: Contains controller functions for handling HTTP requests.
- **models/**: Contains Mongoose models for data schema definition.
- **middlewares/**: Custom middleware functions for error handling, etc.

### Frontend

  - **src/**: Contains the source code for the React frontend.
  - **components/**: React components for different sections of the application.
  - **App.js**: Main component orchestrating the application layout and routing.
  - **index.js**: Entry point for the React application.

## Getting Started

### Web

1. **Site Link**: `https://family-reunification-form.netlify.app/`

### Manualy

1. **Install Dependencies**: 
    - For the backend: `cd backend && npm install`
    - For the frontend: `cd frontend && npm install`

2. **Run the Development Servers**:
    - For the backend: `cd backend && node app.js`
    - For the frontend: `cd frontend && npm start`

3. **Access the Application**:
    - Frontend: Open your browser and navigate to `http://localhost:3000`


## Testing

- Backend: Test endpoints and controller functions using testing libraries using jest: `npx jest`.

## Deployment

- Frontend: Build the React app for production using `npm run build` and deploy to a hosting service.
- Backend: Deploy the Express server to a suitable hosting environment, ensuring MongoDB is properly configured.

## Postman Collection

Access the endpoints using Postman or a similar tool:

[Family Reunification Form Postman Collection](https://documenter.getpostman.com/view/31980925/2s9YymGjZt)
