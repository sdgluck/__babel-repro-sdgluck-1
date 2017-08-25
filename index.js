require('babel-polyfill')
require('babel-register')({
  ignore: /node_modules\/(?:__test__)/
})

require('__test__').hello()
