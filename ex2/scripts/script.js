async function deleteFrFormById () {
  try {
    const deleteFormIdInput = document.getElementById('deleteFormId')
    const formId = deleteFormIdInput.value

    const response = await fetch(`http://localhost:3000/api/familyReunificationForm/${formId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      const errorData = await response.json()
      const errorMsg = { status: response.status, message: errorData.message }
      throw errorMsg
    }
    document.getElementById('errorMsgDelete').innerHTML = ''
    const deleteFrFormByIdDetailsSection = document.getElementById('deleteFrFormByIdDetails')
    deleteFrFormByIdDetailsSection.innerHTML = `
                <h2>Details for Deleted Family Reunification Form:</h2>
                <p>The form has been successfully deleted.</p>
            `
  } catch (errorMsg) {
    console.log('Error deleting form:', errorMsg.status, errorMsg.message)
    document.getElementById('errorMsgDelete').innerHTML = `Error: ${errorMsg.status} ${errorMsg.message}`
  }
}

async function updateFrForm () {
  try {
    const updateFormIdInput = document.getElementById('updateFormId')
    const formId = updateFormIdInput.value
    const updateJsonInput = document.getElementById('updateFormData')
    const formData = JSON.parse(updateJsonInput.value)

    const response = await fetch(`http://localhost:3000/api/familyReunificationForm/${formId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      const errorMsg = { status: response.status, message: errorData.message }
      throw errorMsg
    }

    const updatedForm = await response.json()
    document.getElementById('errorMsgUpdate').innerHTML = ''
    const updateFrFormDetailsSection = document.getElementById('updateFrFormDetails')
    updateFrFormDetailsSection.innerHTML = `
            <h2>Family reunification form with ID: ${formId} has been successfully updated. </h2>
            `
  } catch (errorMsg) {
    console.log('Error updating form:', errorMsg.status, errorMsg.message)
    document.getElementById('errorMsgUpdate').innerHTML = `Error: ${errorMsg.status} ${errorMsg.message}`
  }
}

async function createFrForm () {
  try {
    const createJsonInput = document.getElementById('createName')
    const formData = JSON.parse(createJsonInput.value)

    const response = await fetch('http://localhost:3000/api/familyReunificationForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      const errorMsg = { status: response.status, message: errorData.message }
      throw errorMsg
    }

    const createdForm = await response.json()
    document.getElementById('errorMsgCreate').innerHTML = ''
    const createFrFormDetailsSection = document.getElementById('createFrFormDetails')
    createFrFormDetailsSection.innerHTML = `
         <h2>Family reunification form has been successfully created. </h2>
        `
  } catch (errorMsg) {
    console.log('Error creating form:', errorMsg.status, errorMsg.message)
    document.getElementById('errorMsgCreate').innerHTML = `Error: ${errorMsg.status} ${errorMsg.message}`
  }
}

async function getFrFormById () {
  try {
    const formIdInput = document.getElementById('formId')
    const id = formIdInput.value
    const response = await fetch(`http://localhost:3000/api/familyReunificationForm/${id}`)

    if (response.ok) {
      const responseData = await response.clone().json() // Clone the response and read the JSON
      document.getElementById('errorMsgGetId').innerHTML = ''
      const getFrFormByIdDetails = document.getElementById('getFrFormByIdDetails')
      getFrFormByIdDetails.innerHTML = `
          <h2>Details for Family Reunification Form ID: ${responseData.id}</h2>
          <ul>
              <li><strong>Name:</strong> ${responseData.name}</li>
              <li><strong>Personal Situation:</strong> ${responseData.personalSituation}</li>
              <li><strong>Email:</strong> ${responseData.email}</li>
              <li><strong>Gender:</strong> ${responseData.gender}</li>
              <li><strong>Birth Date:</strong> ${responseData.birthDate}</li>
              <li><strong>Birth Place:</strong> ${responseData.birthCountry}</li>
              <li><strong>Address:</strong> ${responseData.address}</li>
              <li><strong>Phone:</strong> ${responseData.phone}</li>
          </ul>
      `
    } else {
      const errorData = await response.json()
      const errorMsg = { status: response.status, message: errorData.message }
      throw errorMsg
    }
  } catch (errorMsg) {
    console.log('Error:', errorMsg.status, errorMsg.message)
    document.getElementById('errorMsgGetId').innerHTML = `Error: ${errorMsg.status} ${errorMsg.message}`
  }
}

(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/familyReunificationForm')
    const data = await response.json()

    if (!response.ok) {
      const errorMsg = { status: response.status, message: data.message }
      throw errorMsg
    }
    const getAllFrFormsBody = document.getElementById('getAllFrFormsBody')
    data.forEach(form => {
      const row = document.createElement('tr')
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
            `
      getAllFrFormsBody.appendChild(row)
    })
  } catch (error) {
    console.log('Error fetching data:', error)
    document.getElementById('errorMsgGetAll').innerHTML = `Error: ${error.status} ${error.message}`
  }
})()
