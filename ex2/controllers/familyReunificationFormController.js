const {
  getFamilyReunificationForms,
  addFamilyReunificationForm,
  getFamilyReunificationFormById,
  deleteFamilyReunificationFormById,
  updateFamilyReunificationFormById
} = require('../repositories/familyReunificationFormRepository')
const { NotFound, BadRequest } = require('../errors/Errors')

exports.familyReunificationFormController = {
  async getFamilyReunificationForms (req, res, next) {
    try {
      const result = {
        status: 200,
        message: 'Get all family reunification Forms',
        data: await getFamilyReunificationForms()
      }
      if (result.data.length === 0) {
        throw new NotFound('No family reunification form found')
      }
      res.status(result.status).json(result.data)
    } catch (error) {
      next(error)
    }
  },
  async addFamilyReunificationForm (req, res, next) {
    if (!req.body.id || !req.body.citizenId || !req.body.name || !req.body.personalSituation || !req.body.gender || !req.body.gender || !req.body.email || !req.body.birthDate || !req.body.birthCountry || !req.body.address || !req.body.phone || !req.body.marriageCertificateImg || !req.body.CriminalInformationCertificateImg || !req.body.recommendationLetterImg1 || !req.body.recommendationLetterImg2 || !req.body.passportImg || !req.body.bankStatementImg || !req.body.spousePassportImg || !req.body.spouseBankStatementImg || !req.body.familyRecommendationLetterImg1 || !req.body.familyRecommendationLetterImg2 || !req.body.childrenPassportImg1 || !req.body.childrenPassportImg2) {
      throw new BadRequest('Invalid Data')
    }
    try {
      const result = {
        status: 200,
        message: 'Add a family reunification form',
        data: await addFamilyReunificationForm(req.body)
      }
      res.status(result.status).json(result.data || result.message)
    } catch (error) {
      next(error)
    }
  },
  async getFamilyReunificationFormById (req, res, next) {
    try {
      const id = parseInt(req.params.id)
      if (!Number.isInteger(id)) {
        throw new BadRequest('Invalid Data')
      }
      const result = {
        status: 200,
        message: 'Get a family reunification form by id',
        data: await getFamilyReunificationFormById(id)
      }
      if (!result.data) {
        throw new NotFound('No family reunification form found')
      }
      res.status(result.status).json(result.data || result.message)
    } catch (error) {
      next(error)
    }
  },
  async deleteFamilyReunificationFormById (req, res, next) {
    if (!Number.isInteger(parseInt(req.params.id))) {
      throw new BadRequest('Invalid Data')
    }
    try {
      const result = {
        status: 200,
        message: 'Delete a family reunification form by id',
        data: await deleteFamilyReunificationFormById(req.params.id)
      }
      if (!result.data || result.data.deletedCount === 0) {
        throw new NotFound('No family reunification form found')
      }
      res.status(result.status).json(result.data || result.message)
    } catch (error) {
      next(error)
    }
  },
  async updateFamilyReunificationFormById (req, res, next) {
    if (!Number.isInteger(parseInt(req.params.id))) {
      throw new BadRequest('Invalid Data')
    }
    try {
      const result = {
        status: 200,
        message: 'Update a family reunification form by id',
        data: await updateFamilyReunificationFormById(req.params.id, req.body)
      }
      if (!result.data || result.data.modifiedCount === 0) {
        throw new NotFound('No family reunification form found')
      }
      res.status(result.status)
      res.json(result.data || result.message)
    } catch (error) {
      next(error)
    }
  }
}
