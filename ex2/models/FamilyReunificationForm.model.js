const { Schema, model } = require('mongoose')

const familyReunificationFormSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  citizenId: { type: Number, required: true },
  name: { type: String, required: true },
  personalSituation: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: String, required: true },
  birthCountry: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  marriageCertificateImg: { type: String, required: true },
  CriminalInformationCertificateImg: { type: String, required: true },
  recommendationLetterImg1: { type: String, required: true },
  recommendationLetterImg2: { type: String, required: true },
  passportImg: { type: String, required: true },
  bankStatementImg: { type: String, required: true },
  spousePassportImg: { type: String, required: true },
  spouseBankStatementImg: { type: String, required: true },
  familyRecommendationLetterImg1: { type: String, required: true },
  familyRecommendationLetterImg2: { type: String, required: true },
  childrenPassportImg1: { type: String, required: true },
  childrenPassportImg2: { type: String, required: true }
}, { collection: process.env.DB_COLLECTION })

module.exports = model('Restaurant', familyReunificationFormSchema)
