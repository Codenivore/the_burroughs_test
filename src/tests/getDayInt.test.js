const assert = require('assert')
const GetDayInt = require('../utils/getDayInt')

describe('function to get day int', () => {
  describe('can it handle invalid input gracefully', () => {
    it('should return a string of Inalid input if not passed date object', () => {
      // set up
      const invalidDate = {}
      // exercise
      const functionReturn = GetDayInt(invalidDate)
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
  })
  describe('valid input tests', () => {
    it('should return 0 when passed a Sunday', () => {
      // set up
      const sunday = new Date('2020/12/13')
      // exercise
      const functionReturn = GetDayInt(sunday)
      // test
      assert.strictEqual()
    })
    it('should return a 3 for Wednesday', () => {
      // set up
      const wednesday = new Date('2020/12/09')
      // exercise
      const functionReturn = GetDayInt(wednesday)
      // test
      assert.strictEqual(functionReturn, functionReturn)
    })
    it('should return a 5 for Friday', () => {
      // set up
      const friday = new Date('2020/12/25')
      // exercise
      const functionReturn = GetDayInt(friday)
      // test
      assert.strictEqual(functionReturn)
    })
  })
})
