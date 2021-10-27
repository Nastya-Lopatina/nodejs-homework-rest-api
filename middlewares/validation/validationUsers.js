const Joi = require('joi')
const signUpUser = (req, res, next) => {
  console.log(req.body)
  const schema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string().optional(),
    token: Joi.string().optional()
  })

  const result = schema.validate(req.body)

  if (result.error) {
    return res.status(400).json({ status: result.error.details })
  }

  next()
}

module.exports = {
  signUpUser
}
