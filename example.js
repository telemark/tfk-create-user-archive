'use strict'

const updateUser = require('./index')
const persons = require('./persons.json')

const areWeDoneYet = () => {
  if (persons.length > 0) {
    console.log('Next')
    next()
  } else {
    console.log('Done')
  }
}

const next = () => {
  let person = persons.pop()
  updateUser(person, function (err, data) {
    if (err) {
      console.error(err)
    }
    areWeDoneYet()
  })
}

if (persons) {
  next()
}
