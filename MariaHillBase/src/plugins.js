async function register (server) {
  await server.register({
    plugin: require('good'),
    options: {
      ops: {
        interval: 1000
      },
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{ log: '*', response: '*', error: '*' }]
        }, {
          module: 'good-console',
          args: [{
            format: 'YYYY/MM/DD HH:mm:ss'
          }]
        }, 'stdout']
      }
    }
  })

  await server.register([
    require('vision'),
    require('inert'),
    {
      plugin: require('lout'),
      options: {
        apiVersion: require('../package.json').version
      }
    }
  ])
}

module.exports = register
