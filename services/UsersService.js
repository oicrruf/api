const Users = require('../models/Users');

module.exports = {
  create: (body) => Users.create(body),
  find: () => Users.find(),
}