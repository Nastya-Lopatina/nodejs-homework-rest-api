const { user } = require('./schema/usersSchema')
const { BadRequest } = require('http-errors')
const sgMail = require('@sendgrid/mail')

const verify = async (params) => {
  const verifyToken = params.verificationToken
  const { _id } = await user.findOneAndUpdate({ verifyToken }, { $set: { verify: true, verifyToken: null } })
  const foundUser = await user.findById(_id)
  return foundUser
}

const repeatVerify = async ({ email }) => {
  const foundUser = await user.findOne({ email })
  const verifyToken = foundUser.verifyToken

  if (!foundUser) {
    throw new BadRequest('не найден')
  }

  if (foundUser.verify) {
    throw new BadRequest('Проверка уже прошла')
  }

  const msg = {
    to: email,
    from: 'nastya.lopatina.93@gmail.com',
    subject: 'Спасибо за регистрацию',
    text: `нажмите эту ссылку, чтобы подтвердить свой профиль <a href="http://localhost:3001/api/users/verify/${verifyToken}">Confirm</a>`,
    html: `нажмите эту ссылку, чтобы подтвердить свой профиль <a href="http://localhost:3001/api/users/verify/${verifyToken}">Confirm</a>`,

  }
  sgMail.setApiKey(process.env.SENDGRID_KEY)
  await sgMail.send(msg)

  return { message: 'verification email sent' }
}

module.exports = {
  verify,
  repeatVerify
}
