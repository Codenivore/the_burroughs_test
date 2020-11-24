const assert = require('assert')
const GetReport = require('../utils/getReport')

describe('should make sure getting report works', () => {
  describe('testing under default run', () => {
    it('should return an array', () => {
      // set up
      // not needed as testing under default conditions

      // exercise
      const functionReturn = GetReport()
      // test
      assert.strictEqual(functionReturn.isArray(), true)
    })
    it('should return 12 months worth', () => {
      // set up
      // not needed as testing under default conditions

      // exercise
      const functionReturn = GetReport()
      // test
      assert.strictEqual(functionReturn.length, 12)
    })
    it('return array elements should have keys of year, month, bonusDay, payDay', () => {
      // set up
      // not needed as testing under default conditions

      // exercise
      const functionReturn = GetReport()
      // test
      assert.strictEqual(
        Object.prototype.hasOwnProperty.call(functionReturn[0], 'year'),
        true
      )
      assert.strictEqual(
        Object.prototype.hasOwnProperty.call(functionReturn[0], 'month'),
        true
      )
      assert.strictEqual(
        Object.prototype.hasOwnProperty.call(functionReturn[0], 'bonusDay'),
        true
      )
      assert.strictEqual(
        Object.prototype.hasOwnProperty.call(functionReturn[0], 'payDay'),
        true
      )
    })
  })
  describe('testing it works when args passed and defaults params not used', () => {
    it('should handle invalid input gracefully', () => {
      // set up
      const dateFrom = {}
      const monthsTo = 12
      // exercise
      const functionReturn = GetReport({ dateFrom, monthsTo })
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
    it('should not process more than 100 years worth of data', () => {
      // set up
      const dateFrom = new Date('2020/11/24')
      const monthsTo = 1201
      // exercise
      const functionReturn = GetReport({ dateFrom, monthsTo })
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
    it('should return the correct numbers of months as per what is passed in', () => {
      // set up
      const dateFrom = new Date('2020/11/24')
      const monthsTo = 18
      // exercise
      const functionReturn = GetReport({ dateFrom, monthsTo })
      // test
      assert.strictEqual(functionReturn.length, 18)
    })
    it('should start at month of date passed in', () => {
      // set up
      const dateFrom = new Date('2020/11/24')
      const monthsTo = 10
      // exercise
      const functionReturn = GetReport({ dateFrom, monthsTo })
      // test
      assert.strictEqual(
        functionReturn[0].payDay.getMonth(),
        dateFrom.getMonth()
      )
    })
  })
})
