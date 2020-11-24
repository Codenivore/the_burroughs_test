const assert = require('assert')
const GetLastDayOfMonth = require('../utils/getLastDayOfMonth')

describe('testing getting last day of the month', () => {
  describe('check handles invalid input gracefully', () => {
    it('should return string of Invalid input when not passed date object', () => {
      // set up
      const invalidDate = {}
      // exercise
      const functionReturn = GetLastDayOfMonth(invalidDate)
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
  })

  describe('check it does give correct last day of month', () => {
    it('should return 31 for December', () => {
      // set up
      const dateInDec = new Date('2020/12/13')
      // exercise
      const functionReturn = GetLastDayOfMonth(dateInDec)
      // test
      assert.strictEqual(functionReturn, 31)
    })
    it('it should return for 30 November', () => {
      // set up
      const dateInNov = new Date('2020/11/03')
      // exercise
      const functionReturn = GetLastDayOfMonth(dateInNov)
      // test
      assert.strictEqual(functionReturn, 30)
    })
    it('should return 29 for February when in a leap year', () => {
      // set up
      const dateInFebLeapYear = new Date('2020/02/11')
      // exercise
      const functionReturn = GetLastDayOfMonth(dateInFebLeapYear)
      // test
      assert.strictEqual(functionReturn, 29)
    })
    it('should return 28 for February when not in a leap year', () => {
      // set up
      const dateInFebNotLeapYear = new Date('2021/02/11')
      // exercise
      const functionReturn = GetLastDayOfMonth(dateInFebNotLeapYear)
      // test
      assert.strictEqual(functionReturn, 28)
    })
  })
})
