'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/api"'
  // BASE_API: '"https://www.easy-mock.com/mock/5bdd0dc52a081f79be2574c0/api"'
})
