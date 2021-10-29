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

const repeatVerifySchema = Joi.object({
  email: Joi.string().required()
})

const repeatVerify = async (req, res, next) => {
  try {
    const { error } = repeatVerifySchema.validate(req.body)
    if (error) {
      res.status(400).json({ message: 'missing required fields' })
      return
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  signUpUser,
  repeatVerify
}
