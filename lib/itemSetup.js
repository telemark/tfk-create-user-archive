'use strict'

const getSchools = require('tfk-schools-info')

module.exports = (person, callback) => {
  console.log('*** DSF-ITEM-SETUP: %s', person.mail)
  person.phoneNumber = person.phoneNumber.replace('+47', '')

  const schoolOpts = {
    organizationNumber: person.orgId
  }
  person.accessGroup = getSchools(schoolOpts)

  console.log('*** DSF-ITEM-SETUP: %s: DONE', person.mail)
  return callback(null, person)
}
