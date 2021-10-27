const Joi = require('joi')

const addValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
    phone: Joi.string().min(9).max(20).required(),
    favorite: Joi.boolean().optional()
  })

  const result = schema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ status: result.error.details })
  }

  next()
}

const patchContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(30).optional(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
    phone: Joi.string().min(9).max(20).optional(),
    favorite: Joi.boolean().optional()
  })
  const result = schema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ status: result.error.details })
  }
  next()
}

module.exports = { addValidation, patchContactValidation }
