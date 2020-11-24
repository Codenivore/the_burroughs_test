const IsValidDate = require('./isValidDateObject')
const IsWeekend = require('./isWeekend')
const GetLastDayOfMonth = require('./getLastDayOfMonth')
const GetPrevOrNextDate = require('./getPrevOrNextDate')

const getReport = (
  // default args passed in to meet the brief but is extensible
  argToParamObject = { dateFrom: new Date(), monthsTo: 12 }
) => {
  // validate before destructuring so doesn't error out
  if (
    !IsValidDate(argToParamObject.dateFrom) ||
    // typeof argToParamObject.monthsTo === 'number' ||
    argToParamObject.monthsTo > 1200
  ) {
    return 'Invalid input'
  }

  // destructure object passed in so don't need to keep using dot notation
  const { dateFrom, monthsTo } = argToParamObject

  // initialise vars
  let year
  let month
  let bonusDay
  let payDay
  const cursorDate = dateFrom
  const returnArray = []
  const shortMonthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  for (let i = 0; i < monthsTo; i += 1) {
    // get year for this iteration
    year = cursorDate.getFullYear()

    // get month for this iteration
    month = cursorDate.getMonth()

    // work day staff to get paid bonus for prev month
    bonusDay = new Date(year, month, 15)

    if (IsWeekend(bonusDay)) {
      bonusDay = GetPrevOrNextDate('next', 'wednesday', bonusDay)
    }
    // work out pay day
    payDay = new Date(year, month, GetLastDayOfMonth(cursorDate))

    if (IsWeekend(payDay)) {
      payDay = GetPrevOrNextDate('previous', 'friday', payDay)
    }

    returnArray.push({
      year,
      month: shortMonthNames[month],
      bonusDay,
      payDay
    })

    cursorDate.setMonth(cursorDate.getMonth() + 1)
  }

  return returnArray
}
module.exports = getReport
