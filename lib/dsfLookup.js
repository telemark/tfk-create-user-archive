'use strict'

const config = require('../config')
const dsfLookup = require('node-dsf')

module.exports = (person, callback) => {
  console.log('*** DSF-LOOKUP: %s', person.mail)
  const query = {
    saksref: '360 import',
    foedselsnr: person.uid
  }

  const options = {
    method: 'hentDetaljer',
    config: config.dsf,
    query: query
  }

  dsfLookup(options, function (err, data) {
    if (err) {
      return callback(err)
    }
    person.dsfData = data
    console.log('*** DSF-LOOKUP: %s: DONE', person.mail)
    return callback(null, person)
  })
}
