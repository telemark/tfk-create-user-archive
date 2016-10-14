'use strict'

const getSchools = require('tfk-schools-info')

module.exports = (person, callback) => {
  console.log('*** DSF-ITEM-SETUP: %s', person.mail)
  person.mobilePhone = person.mobilePhone.replace('+47', '')
  person.username = 'login\\' + person.username

  const schoolOpts = {
    organizationNumber: person.organizationNumber
  }
  person.accessGroup = getSchools(schoolOpts)

  console.log('*** DSF-ITEM-SETUP: %s: DONE', person.mail)
  return callback(null, person)
}
