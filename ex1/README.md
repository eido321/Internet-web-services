<font size="4">**Family Reunification Form API**</font>

This repository contains files for a simple Family Reunification Form API. The API is designed to handle CRUD operations (Create, Read, Update, Delete) for family reunification forms.

<font size="3">**index.html**</font>

HTML file containing the structure of the web page. It includes sections for retrieving all forms, retrieving a form by ID, creating a new form, updating a form, and deleting a form.

<font size="3">**script.js**</font>

The script.js file contains client-side JavaScript code for interacting with the Family Reunification Form API. This script handles user input, sends requests to the API endpoints, and updates the HTML page dynamically.

<font size="3">**app.js**</font>

Node.js server file. It uses the 'http' module to create a server. The server handles requests by routing them through the 'router.js' file.

<font size="3">**router.js**</font>

Routing module that directs incoming HTTP requests to the appropriate controller functions or serves static files.

<font size="3">**controller.js**</font>

Controller module containing functions for handling the CRUD operations. It interacts with the 'repository.js' file.

<font size="3">**repository.js**</font>

Repository module responsible for managing the data. It includes functions for retrieving all forms, retrieving a form by ID, creating a new form, updating a form, and deleting a form.

<font size="3">**data.json**</font>

JSON file containing sample data for family reunification forms. The data is initially loaded from this file and is modified as forms are created, updated, or deleted.

<font size="3">**Instructions:**</font>
Run the Node.js server:

bash
Copy code
node app.js
Access the web application at http://localhost:8080/ in your browser.

Use the provided HTML form sections to interact with the API:

- Retrieve all forms
- Retrieve a form by ID
- Create a new form
- Update a form
- Delete a form by ID

<font size="3">**PostMan:**</font>

Access the API endpoints using PostMan or a similar tool:
https://documenter.getpostman.com/view/31980925/2s9YymGjZt

<font size="2">**Request List:**</font>

- GET getAllFrForms http://localhost:8080/FamilyReunificationForms
- GET getFrFormById http://localhost:8080/FamilyReunificationForm/:id
- POST createFrForm http://localhost:8080/FamilyReunificationForm
- PUT updateFrForm http://localhost:8080/FamilyReunificationForm/:id
- DELETE deleteFrForm http://localhost:8080/FamilyReunificationForm/:id

<font size="3">**Important Notes:**</font>

The server listens on port 8080 by default. Make sure this port is available.
The API accepts and returns data in JSON format.
When creating or updating a form, provide the input data in the specified JSON format.
