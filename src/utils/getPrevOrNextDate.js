const IsValidDate = require('./isValidDateObject')
const ConvertDayNameToInt = require('./convertDayNameToInt')

const getPrevOrNextDate = (nextOrPrevious, targetDay, argDate) => {
  const intOfTarget = ConvertDayNameToInt(targetDay)

  if (intOfTarget === 'Invalid input' || !IsValidDate(argDate)) {
    return 'Invalid input'
  }

  const cursorDate = argDate

  // deal with whether we need too add or subtract days to hit target
  switch (nextOrPrevious) {
    case 'next':
      // do while in case would match on first loop
      do {
        cursorDate.setDate(cursorDate.getDate() + 1)
      } while (intOfTarget !== cursorDate.getDay())

      break
    case 'previous':
      // do while in case would match on first loop
      do {
        cursorDate.setDate(cursorDate.getDate() - 1)
      } while (intOfTarget !== cursorDate.getDay())
      break
    default:
      return 'Invalid input'
  }

  return cursorDate
}
module.exports = getPrevOrNextDate
