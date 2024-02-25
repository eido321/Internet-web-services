const mongoStorage = require('../data/mongoStorage')

// eslint-disable-next-line new-cap
const storage = new mongoStorage('familyReunificationForm')

function getFamilyReunificationForms () {
  return storage.getAll()
}

function addFamilyReunificationForm (data) {
  return storage.create(data)
}

function getFamilyReunificationFormById (id) {
  return storage.retrieve(id)
}

function deleteFamilyReunificationFormById (id) {
  return storage.delete(id)
}

function updateFamilyReunificationFormById (id, body) {
  return storage.update(id, body)
}

module.exports = {
  getFamilyReunificationForms,
  addFamilyReunificationForm,
  getFamilyReunificationFormById,
  deleteFamilyReunificationFormById,
  updateFamilyReunificationFormById
}
