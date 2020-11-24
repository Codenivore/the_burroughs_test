const IsValidDate = require('./isValidDateObject')

const isWeekend = (argDate) => {
  // if not a valid date not point going further so return out
  if (!IsValidDate(argDate)) {
    return 'Invalid input'
  }
}
module.exports = isWeekend
