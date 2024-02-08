<font size="4">**Family Reunification Form API**</font>

This repository contains files for a simple Family Reunification Form API. The API is designed to handle CRUD operations (Create, Read, Update, Delete) for family reunification forms.

<font size="3">**index.html**</font>

HTML file containing the structure of the web page. It includes sections for retrieving all forms, retrieving a form by ID, creating a new form, updating a form, and deleting a form.

<font size="3">**script.js**</font>

The script.js file contains client-side JavaScript code for interacting with the Family Reunification Form API. This script handles user input, sends requests to the API endpoints, and updates the HTML page dynamically.

<font size="3">**app.js**</font>

Includes the main server file for the Express application. It sets up the server, middleware, and routes for handling family reunification form operations.

<font size="3">**Project File Structure**</font>

<font size="3">**server.js**</font>
- Entry point for the Express server.
- Sets up middleware such as `express.json()` and `express.urlencoded()` for parsing JSON and URL-encoded data.
- Utilizes the `morgan` logger middleware for logging HTTP requests.
- Imports and utilizes the `errorHandler` middleware for handling errors.
- Defines routes for handling family reunification form operations and starts the server listening on a specified port.

<font size="3">**familyReunificationFormRouter.js**</font>
- Defines routes specific to family reunification forms.
- Utilizes the Express `Router` to define route handlers for various HTTP methods (GET, POST, PUT, DELETE) related to family reunification forms.

<font size="3">**staticFileRouter.js**</font>
- Manages routing and serving static files, including scripts and stylesheets, using Express middleware.
- Utilizes Express `Router` to handle requests for static files and serves an HTML file for the root route.

<font size="3">**familyReunificationFormController.js**</font>
- Contains controller functions for handling HTTP requests related to family reunification forms.
- Includes functions for getting, adding, updating, and deleting family reunification forms.
- Each function handles errors and sends appropriate HTTP responses.

<font size="3">**familyReunificationFormRepository.js**</font>
- Defines a repository class for interacting with the data storage (MongoDB) specifically for family reunification forms.
- Provides methods for CRUD operations (Create, Read, Update, Delete) on family reunification forms.

<font size="3">**mongoStorage.js**</font>
- Defines a class for handling MongoDB operations.
- Connects to the MongoDB database using Mongoose.
- Provides methods for CRUD operations using Mongoose models.

<font size="3">**FamilyReunificationForm.model.js**</font>
- Defines the Mongoose schema for the family reunification form data.
- Specifies the structure and validation rules for the family reunification form documents.

<font size="3">**familyReunificationForm.test.js**</font>
- Contains test cases using `jest` and `supertest` for the family reunification form routes and controllers.
- Mocks the repository methods to simulate database interactions.
- Test cases cover scenarios for successful and failed HTTP requests.

<font size="3">**errors.js**</font>
- Defines custom error classes for different HTTP error statuses (400, 404, 500).
- Each class extends the `Error` class and sets the appropriate status code.
- These error classes are utilized in the controller to handle and send error responses.


<font size="3">**Instructions:**</font>
Run the Node.js server:

bash
Copy code
node app.js
Access the web application at http://localhost:3000 in your browser.

Use the provided HTML form sections to interact with the API:

- Retrieve all forms
- Retrieve a form by ID
- Create a new form
- Update a form
- Delete a form by ID

<font size="3">**PostMan:**</font>

Access the API endpoints using PostMan or a similar tool:
https://documenter.getpostman.com/view/31980925/2s9YymGjZt

<font size="2">**Basic Request List:**</font>

- GET getAllFrForms http://localhost:3000/api/familyReunificationForm
- GET getFrFormById http://localhost:3000/api/familyReunificationForm/:id
- POST createFrForm http://localhost:3000/api/familyReunificationForm
- PUT updateFrForm http://localhost:3000/api/familyReunificationForm/:id
- DELETE deleteFrForm http://localhost:3000/api/familyReunificationForm/:id

*note:  In PostMan you will be able to find provided request examples for each request type.

<font size="3">**Important Notes:**</font>

The server listens on port 3000 by default. Make sure this port is available.
The API accepts and returns data in JSON format.
When creating or updating a form, provide the input data in the specified JSON format.
