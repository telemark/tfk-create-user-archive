'use strict'

const getSchools = require('tfk-schools-info')

module.exports = (person, callback) => {
  console.log('*** DSF-ITEM-SETUP: %s', person.mail)
  if (person.mobilePhone && person.mobilePhone.length > 0) {
    person.mobilePhone = person.mobilePhone.replace('+47', '')
  } else {
    person.mobilePhone = 0
  }
  person.username = 'login\\' + person.username

  const schoolOpts = {
    organizationNumber: person.organizationNumber
  }
  const school = getSchools(schoolOpts)
  if (school && school[0] && school[0].organizationNumber360) {
    person.organizationNumber360 = school[0].organizationNumber360
  } else {
    person.organizationNumber360 = ''
  } 

  console.log('*** DSF-ITEM-SETUP: %s: DONE', person.mail)
  return callback(null, person)
}
