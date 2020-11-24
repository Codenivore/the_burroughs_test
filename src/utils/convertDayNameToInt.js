const { requiredOption } = require('commander')

const IsValidDate = require('./isValidDateObject')

const convertDayNameToInt = (dayName) => {
  const correctOrderedDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'satrurday'
  ]

  if (typeof dayName !== 'string') {
    return 'Inalid input'
  }

  const lowerCasedDay = dayName.toLowerCase()
  const findIdx = correctOrderedDays.findIndex((elem) => elem === lowerCasedDay)

  if (findIdx === -1) {
    return 'Invalid input'
  }
  return findIdx
}
module.exports = convertDayNameToInt
