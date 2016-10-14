'use strict'

const waterfall = require('async-waterfall')

// const getContactPerson = require('./lib/getContactPerson')
const itemSetup = require('./lib/itemSetup')
const dsfLookup = require('./lib/dsfLookup')
const dsfUnwrap = require('./lib/dsfUnwrap')
const synchronizeContactPerson = require('./lib/synchronizeContactPerson')
const synchronizeUser = require('./lib/synchronizeUser')

const create = (req, callback) => {
  waterfall(
    [
      function (cb) { return cb(null, req) },
      itemSetup,
      dsfLookup,
      dsfUnwrap,
      synchronizeContactPerson,
      synchronizeUser
    ], function (err, success) {
    if (err) {
      return callback(err)
    }
    return callback(null, success)
  })
}

module.exports = (opts, callback) => {
  create(opts, function (err, data) {
    if (err) {
      return callback(err)
    } else {
      return callback(null, data)
    }
  })
}
