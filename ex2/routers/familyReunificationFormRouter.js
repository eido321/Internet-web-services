const { Router } = require('express')
const { familyReunificationFormController } = require('../controllers/familyReunificationFormController')

const familyReunificationFormRouter = new Router()

familyReunificationFormRouter.get('/', familyReunificationFormController.getFamilyReunificationForms)
familyReunificationFormRouter.get('/:id', familyReunificationFormController.getFamilyReunificationFormById)
familyReunificationFormRouter.post('/', familyReunificationFormController.addFamilyReunificationForm)
familyReunificationFormRouter.put('/:id', familyReunificationFormController.updateFamilyReunificationFormById)
familyReunificationFormRouter.delete('/:id', familyReunificationFormController.deleteFamilyReunificationFormById)

module.exports = { familyReunificationFormRouter }
