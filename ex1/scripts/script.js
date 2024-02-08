function deleteFrFormById() {
    const deleteFormIdInput = document.getElementById('deleteFormId');
    const deleteFormId = deleteFormIdInput.value;
    if (!isNaN(deleteFormId) && deleteFormId.trim() !== '') {
        deleteFrFormByIdRequest(parseInt(deleteFormId, 10));
    } else {
        alert('Please enter a valid Form ID for deletion.');
    }
}
function deleteFrFormByIdRequest(formId) {
    fetch(`http://localhost:8080/FamilyReunificationForm/${formId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(deletedForm => {
            const deleteFrFormByIdDetailsSection = document.getElementById('deleteFrFormByIdDetails');
            deleteFrFormByIdDetailsSection.innerHTML = `
                <h2>Details for Deleted Family Reunification Form:</h2>
                <p>The form has been successfully deleted.</p>
            `;
        })
        .catch(error => {
            console.error('Error deleting form:', error);
            alert('Error deleting form. Check the console for details.');
        });
}

function createFrForm() {
    const createJsonInput = document.getElementById('createName');
    const createJson = createJsonInput.value;

    if (createJson.trim() !== '') {
        let formData;
        try {
            formData = JSON.parse(createJson);
        } catch (error) {
            alert('Invalid JSON format. Please enter a valid JSON string.');
            return;
        }

        createFrFormRequest(formData);
    } else {
        alert('Please enter JSON data in the textarea.');
    }
}

function createFrFormRequest(formData) {
    fetch('http://localhost:8080/FamilyReunificationForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(createdForm => {
            console.log('Form created successfully:', createdForm);
            const createFrFormDetailsSection = document.getElementById('createFrFormDetails');
            createFrFormDetailsSection.innerHTML = `
            <h2>Details for Newly Created Family Reunification Form ID: ${createdForm.id}</h2>
            <ul>
                <li><strong>Name:</strong> ${createdForm.name}</li>
                <li><strong>Personal Situation:</strong> ${createdForm.personalSituation}</li>
                <li><strong>Email:</strong> ${createdForm.email}</li>
                <li><strong>Gender:</strong> ${createdForm.gender}</li>
                <li><strong>Birth Date:</strong> ${createdForm.birthDate}</li>
                <li><strong>Birth Place:</strong> ${createdForm.birthCountry}</li>
                <li><strong>Address:</strong> ${createdForm.address}</li>
                <li><strong>Phone:</strong> ${createdForm.phone}</li>
                <!-- Add other properties as needed -->
            </ul>
        `;
        })
        .catch(error => {
            console.error('Error creating form:', error);
            alert('Error creating form. Check the console for details.');
        });
}
function updateFrForm() {
    const updateFormIdInput = document.getElementById('updateFormId');
    const updateFormId = updateFormIdInput.value;
    const updateJsonInput = document.getElementById('updateFormData');
    const updateJson = updateJsonInput.value;
    if (!isNaN(updateFormId) && updateFormId.trim() !== '' && updateJson.trim() !== '') {
        let formData;
        try {
            formData = JSON.parse(updateJson);
        } catch (error) {
            alert('Invalid JSON format. Please enter a valid JSON string.');
            return;
        }

        updateFrFormRequest(parseInt(updateFormId, 10), formData);
    } else {
        alert('Please enter a valid Form ID and updated JSON data in the textareas.');
    }
}
function updateFrFormRequest(formId, formData) {
    fetch(`http://localhost:8080/FamilyReunificationForm/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(updatedForm => {
            console.log('Form updated successfully:', updatedForm);
            const updateFrFormDetailsSection = document.getElementById('updateFrFormDetails');
            updateFrFormDetailsSection.innerHTML = `
                <h2>Details for Updated Family Reunification Form ID: ${updatedForm.id}</h2>
                <ul>
                    <li><strong>Name:</strong> ${updatedForm.name}</li>
                    <li><strong>Personal Situation:</strong> ${updatedForm.personalSituation}</li>
                    <li><strong>Email:</strong> ${updatedForm.email}</li>
                    <li><strong>Gender:</strong> ${updatedForm.gender}</li>
                    <li><strong>Birth Date:</strong> ${updatedForm.birthDate}</li>
                    <li><strong>Birth Place:</strong> ${updatedForm.birthCountry}</li>
                    <li><strong>Address:</strong> ${updatedForm.address}</li>
                    <li><strong>Phone:</strong> ${updatedForm.phone}</li>
                </ul>
            `;
        })
        .catch(error => {
            console.error('Error updating form:', error);
            alert('Error updating form. Check the console for details.');
        });
}
function getFrFormById() {
    const formIdInput = document.getElementById('formId');
    const formId = formIdInput.value;
    if (!isNaN(formId) && formId.trim() !== '') {
        displayFrFormDetails(parseInt(formId, 10));
    } else {
        alert('Please enter a valid Form ID.');
    }
}
function displayFrFormDetails(id) {
    fetch(`http://localhost:8080/FamilyReunificationForm/${id}`)
        .then(response => response.json())
        .then(form => {
            const getFrFormByIdDetails = document.getElementById('getFrFormByIdDetails');
            getFrFormByIdDetails.innerHTML = `
                <h2>Details for Family Reunification Form ID: ${form.id}</h2>
                <ul>
                    <li><strong>Name:</strong> ${form.name}</li>
                    <li><strong>Personal Situation:</strong> ${form.personalSituation}</li>
                    <li><strong>Email:</strong> ${form.email}</li>
                    <li><strong>Gender:</strong> ${form.gender}</li>
                    <li><strong>Birth Date:</strong> ${form.birthDate}</li>
                    <li><strong>Birth Place:</strong> ${form.birthCountry}</li>
                    <li><strong>Address:</strong> ${form.address}</li>
                    <li><strong>Phone:</strong> ${form.phone}</li>
                </ul>
            `;
        })
        .catch(error => console.error('Error fetching form details:', error));
}

fetch('http://localhost:8080/FamilyReunificationForms')
    .then(response => response.json())
    .then(data => {
        const getAllFrFormsBody = document.getElementById('getAllFrFormsBody');
        data.forEach(form => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${form.id}</td>
                <td>${form.name}</td>
                <td>${form.personalSituation}</td>
                <td>${form.email}</td>
                <td>${form.gender}</td>
                <td>${form.birthDate}</td>
                <td>${form.birthCountry}</td>
                <td>${form.address}</td>
                <td>${form.phone}</td>
            `;
            row.addEventListener('click', () => displayFrFormDetails(form.id));
            getAllFrFormsBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
