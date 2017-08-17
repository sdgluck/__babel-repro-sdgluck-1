require('babel-polyfill')
require('babel-register')({
  ignore: false
})

require('./hello').hello()
