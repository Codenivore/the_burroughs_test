const isValidDateObject = (argDate) => {
  const typeAsString = Object.prototype.toString.call(argDate)
  if (
    typeAsString === '[object Date]' &&
    // disable eslint no self compare just for this line
    // comparing time to time should be false if not date as will be NaN
    /* eslint-disable no-self-compare */
    argDate.getTime() === argDate.getTime()
    /* eslint-enable no-self-compare */
  ) {
    return true
  }
  return false
}

module.exports = isValidDateObject
