const {
  getFamilyReunificationForms,
  addFamilyReunificationForm,
  getFamilyReunificationFormById,
  deleteFamilyReunificationFormById,
  updateFamilyReunificationFormById
} = require('../repositories/familyReunificationFormRepository')
const { NotFound, InternalServer, BadRequest } = require('../errors/Errors')

exports.familyReunificationFormController = {
  async getFamilyReunificationForms (req, res) {
    try {
      const result = {
        status: 200,
        message: 'Get all family reunification Forms',
        data: await getFamilyReunificationForms()
      }
      if (result.data.length === 0) {
        const errorMsg = new NotFound('No family reunification form found')
        return res.status(errorMsg.status).json({ message: errorMsg.message })
      }
      res.status(result.status).json(result.data)
    } catch (error) {
      const errorMsg = new InternalServer('Internal server error')
      res.status(errorMsg.status).json({ message: errorMsg.message })
    }
  },
  async addFamilyReunificationForm (req, res) {
    if (!req.body.id || !req.body.citizenId || !req.body.name || !req.body.personalSituation || !req.body.gender || !req.body.gender || !req.body.email || !req.body.birthDate || !req.body.birthCountry || !req.body.address || !req.body.phone || !req.body.marriageCertificateImg || !req.body.CriminalInformationCertificateImg || !req.body.recommendationLetterImg1 || !req.body.recommendationLetterImg2 || !req.body.passportImg || !req.body.bankStatementImg || !req.body.spousePassportImg || !req.body.spouseBankStatementImg || !req.body.familyRecommendationLetterImg1 || !req.body.familyRecommendationLetterImg2 || !req.body.childrenPassportImg1 || !req.body.childrenPassportImg2) {
      const errorMsg = new BadRequest('Invalid Data')
      return res.status(errorMsg.status).json({ message: errorMsg.message })
    }
    try {
      const result = {
        status: 200,
        message: 'Add a family reunification form',
        data: await addFamilyReunificationForm(req.body)
      }
      res.status(result.status).json(result.data || result.message)
    } catch (error) {
      const errorMsg = new InternalServer('Internal server error')
      res.status(errorMsg.status).json({ message: errorMsg.message })
    }
  },
  async getFamilyReunificationFormById (req, res) {
    try {
      const id = parseInt(req.params.id)
      if (!Number.isInteger(id)) {
        const errorMsg = new BadRequest('Invalid Data')
        return res.status(errorMsg.status).json({ message: errorMsg.message })
      }
      const result = {
        status: 200,
        message: 'Get a family reunification form by id',
        data: await getFamilyReunificationFormById(id)
      }
      if (!result.data) {
        const errorMsg = new NotFound('No family reunification form found')
        return res.status(errorMsg.status).json({ message: errorMsg.message })
      }
      res.status(result.status).json(result.data || result.message)
    } catch (error) {
      const errorMsg = new InternalServer('Internal server error')
      res.status(errorMsg.status).json({ message: errorMsg.message })
    }
  },
  async deleteFamilyReunificationFormById (req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
      const errorMsg = new BadRequest('Invalid Data')
      return res.status(errorMsg.status).json({ message: errorMsg.message })
    }
    try {
      const result = {
        status: 200,
        message: 'Delete a family reunification form by id',
        data: await deleteFamilyReunificationFormById(req.params.id)
      }
      if (!result.data || result.data.deletedCount === 0) {
        const errorMsg = new NotFound('No family reunification form found')
        return res.status(errorMsg.status).json({ message: errorMsg.message })
      }
      res.status(result.status).json(result.data || result.message)
    } catch (error) {
      const errorMsg = new InternalServer('Internal server error')
      res.status(errorMsg.status).json({ message: errorMsg.message })
    }
  },
  async updateFamilyReunificationFormById (req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
      const errorMsg = new BadRequest('Invalid Data')
      return res.status(errorMsg.status).json({ message: errorMsg.message })
    }
    try {
      const result = {
        status: 200,
        message: 'Update a family reunification form by id',
        data: await updateFamilyReunificationFormById(req.params.id, req.body)
      }
      if (!result.data || result.data.modifiedCount === 0) {
        const errorMsg = new NotFound('No family reunification form found')
        result.data = null
        return res.status(errorMsg.status).json({ message: errorMsg.message })
      }
      res.status(result.status)
      res.json(result.data || result.message)
    } catch (error) {
      const errorMsg = new InternalServer('Internal server error')
      res.status(errorMsg.status).json({ message: errorMsg.message })
    }
  }
}
