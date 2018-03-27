const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET_KEY } = require('../../config')


function hashPassword(password) {
  return bcrypt.hash(password, 10)
}

function validatePassword(input, password) {
  return bcrypt.compare(input, password);
}

function getToken(userId) {
  return jwt.sign({ userId }, APP_SECRET_KEY)
}

function verifyToken(token) {
  return jwt.verify(token, APP_SECRET_KEY)
}

const bearerRegEx = /^(Bearer )(.*)/;
function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization && bearerRegEx.test(Authorization)) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = verifyToken(token)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  hashPassword,
  validatePassword,
  getToken,
  verifyToken,
  getUserId
}
