'use strict'

const p360 = require('p360')
const config = require('../config')

module.exports = (person, callback) => {
  console.log('*** P360-UPDATE-USER: %s', person.mail)

  const options = {
    p360: config.p360,
    clientService: 'UserService',
    clientMethod: 'SynchronizeUser',
    args: {
      parameter: {
        ContactExternalId: person.personalIdNumber, // * Reference to the user’s contact person
        Login: person.username, // * Login name
        Profiles: [
          {
            UserProfile: [
              {
                EnterpriseId: person.organizationNumber,
                Role: 'Lærer' // Code from the Sysroles code table, (using the configured language), or recno on the format “recno:123”
              }
            ]
          }
        ]
      }
    }
  }

  p360(options, (err, data) => {
    if (err) {
      return callback(err)
    } else {
      console.log('*** P360-UPDATE-USER: %s: DONE', person.mail)
      return callback(null, data)
    }
  })
}
