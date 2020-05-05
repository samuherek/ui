
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hooks.cjs.production.min.js')
} else {
  module.exports = require('./hooks.cjs.development.js')
}
