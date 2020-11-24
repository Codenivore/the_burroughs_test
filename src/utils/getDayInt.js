const IsValidDate = require('./isValidDateObject')

const getDayInt = (argDate) => {
  // if not a valid date not point going further so return out
  if (!IsValidDate(argDate)) {
    return 'Invalid input'
  }

  const dayAsInt = argDate.getDay()

  return dayAsInt
}
module.exports = getDayInt
