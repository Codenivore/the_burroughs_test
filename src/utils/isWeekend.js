const IsValidDate = require('./isValidDateObject')

const isWeekend = (argDate) => {
  // if not a valid date not point going further so return out
  if (!IsValidDate(argDate)) {
    return 'Invalid input'
  }

  const dayInt = argDate.getDay()

  // if day int is a 0 (Sunday) or 6 (Saturday)
  if (dayInt === 0 || dayInt === 6) {
    return true
  }
  return false
}
module.exports = isWeekend
