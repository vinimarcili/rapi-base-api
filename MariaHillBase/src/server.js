const Hapi = require('hapi')

const server = Hapi.server({
  port: process.env.PORT || 6789
})

module.exports = {
  server
}
