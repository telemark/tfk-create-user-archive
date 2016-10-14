'use strict'

const p360 = require('p360')
const config = require('../config')

module.exports = (person, callback) => {
  console.log('*** P360-GET-CONTACT: %s', person.mail)
  const options = {
    p360: config.p360,
    clientService: 'ContactService',
    clientMethod: 'GetContactPersons',
    args: {
      parameter: {
        ExternalId: person.personalIdNumber
      }
    }
  }
  p360(options, (err, data) => {
    if (err) {
      return callback(err)
    } else {
      if (Array.isArray(data.GetContactPersonsResult.ContactPersons.ContactPersonBase)) {
        if (data.GetContactPersonsResult.ContactPersons.ContactPersonBase.length > 1) {
          console.log('Duplicate contact')
        }
        console.log('*** P360-GET-CONTACT: %s: DONE', person.mail)
        return callback(null, data.GetContactPersonsResult.ContactPersons.ContactPersonBase[0])
      }
      return callback(null, false)
    }
  })
}
