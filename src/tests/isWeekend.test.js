const assert = require('assert')
const IsWeekend = require('../utils/isWeekend')

describe('testing is weekend function', () => {
  describe('testing invalid input condition', () => {
    it('should handle invalid input gracefully', () => {
      // set up
      const invalidDate = {}
      // exercise
      const functionReturn = IsWeekend(invalidDate)
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
  })

  describe('testing valid dates which do not fall on weekends', () => {
    it('should return false for a Monday', () => {
      // set up
      const monday = new Date('2020/12/07')
      // exercise
      const functionReturn = IsWeekend(monday)
      // test
    })
    it('should return false for a Thursday', () => {
      // set up
      const thursday = new Date('2020/12/10')
      // exercise
      const functionReturn = IsWeekend(thursday)
      // test
    })
  })

  describe('testing valid dates which do fall on weekends', () => {
    it('should return true for a Saturday', () => {
      // set up
      const saturday = new Date('2020/12/12')
      // exercise
      const functionReturn = IsWeekend(saturday)
      // test
    })
    it('should return true for a Sunday', () => {
      // set up
      const sunday = new Date('2020/12/12')
      // exercise
      const functionReturn = IsWeekend(sunday)
      // test
    })
  })
})
