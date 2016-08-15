'use strict'

const p360 = require('p360')
const config = require('../config')

module.exports = (person, callback) => {
  console.log('*** P360-UPDATE-CONTACT: %s', person.mail)
  const options = {
    p360: config.p360,
    clientService: 'ContactService',
    clientMethod: 'SynchronizeContactPerson',
    args: {
      parameter: {
        Email: person.mail,
        Enterprise: person.orgId,
        ExternalId: person.uid,
        FirstName: person.firstName,
        LastName: person.lastName,
        PhoneNumber: person.phoneNumber,
        PrivateAddress: {
          Country: 'NOR',
          StreetAddress: person.address,
          ZipCode: person.zip,
          ZipPlace: person.city
        }
      }
    }
  }

  p360(options, function (err, data) {
    if (err) {
      return callback(err)
    } else {
      console.log('*** P360-UPDATE-CONTACT: %s: DONE', person.mail)
      return callback(null, person)
    }
  })
}
