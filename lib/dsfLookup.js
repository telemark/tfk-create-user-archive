'use strict'

const config = require('../config')
const dsfLookup = require('node-dsf')

module.exports = (person, callback) => {
  console.log('*** DSF-LOOKUP: %s', person.mail)
  const query = {
    saksref: '360 import',
    foedselsnr: person.personalIdNumber
  }

  const options = {
    method: 'hentDetaljer',
    config: config.dsf,
    query: query
  }

  dsfLookup(options, (err, data) => {
    if (err) {
      return callback(err)
    }
    person.dsfData = data
    console.log('*** DSF-LOOKUP: %s: DONE', person.mail)
    return callback(null, person)
  })
}
