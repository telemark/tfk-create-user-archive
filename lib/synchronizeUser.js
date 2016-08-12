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
        ContactExternalId: person.uid, // * Reference to the user’s contact person
        Login: person.username, // * Login name
        Role: '', // Code from the Sysroles code table, (using the configured language), or recno on the format “recno:123”
        EnterpriseId: person.orgId, // * The role’s organization unit. Set to either it’s external id or enterprise number, or recno on the format “recno:123”
        AccessGroups: [
          {
            AccessGroup: person.accessGroup // Name of the access group, or recno on the format “recno:123”
          }
        ]
      }
    }
  }

  p360(options, function (err, data) {
    if (err) {
      return callback(err)
    } else {
      console.log('*** P360-UPDATE-USER: %s: DONE', person.mail)
      return callback(null, data)
    }
  })
}
