'use strict'

const unwrapContact = require('tfk-dsf-unwrap-contact')
const normalizeContact = require('tfk-dsf-normalize-contact')

module.exports = (person, callback) => {
  console.log('*** DSF-UNWRAP: %s', person.mail)
  const unwrapped = unwrapContact(person.dsfData)
  const normalized = normalizeContact(unwrapped)
  const result = Object.assign(person, normalized)
  console.log('*** DSF-UNWRAP: %s: DONE', person.mail)
  return callback(null, result)
}
