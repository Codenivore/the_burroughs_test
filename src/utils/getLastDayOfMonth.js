const IsValidDate = require('./isValidDateObject')

const getLastDayOfMonth = (argDate) => {
  // if not a valid date not point going further so return out
  if (!IsValidDate(argDate)) {
    return 'Invalid input'
  }

  const monthofArgDate = argDate.getMonth()
  const yearOFArgDate = argDate.getFullYear()

  const lastDayDate = new Date(yearOFArgDate, monthofArgDate + 1, 0)
  const lastDay = lastDayDate.getDate()

  return lastDay
}
module.exports = getLastDayOfMonth
