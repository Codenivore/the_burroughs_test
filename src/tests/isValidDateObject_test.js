const assert = require('assert')

describe('function to validate date object', () => {
  describe('check invalid scenarios', () => {
    it('should return a false boolean if passed empty object as arg', () => {
      // set up
      const invalidDateObject = {}
      // exercise
      const functionReturn = IsValidDate(invalidDateObject)
      // test
      assert.strictEqual(functionReturn, false)
    })

    it('should return a boolean of false if passed a string as arg', () => {
      // set up
      const invalidString = 'May the fourth be with you.'
      // exercise
      const functionReturn = IsValidDate(invalidString)
      // test
      assert.strictEqual(functionReturn, false)
    })
  })
  describe('check valid scenarios', () => {
    it('should return true when date object for 24th Nov 2020 passed in', () => {
      // set up
      const validDateObject = new Date('2020/11/24')
      // exercise
      const functionReturn = IsValidDate(validDateObject)
      // test
      assert.strictEqual(functionReturn, true)
    })
    it('should return true when date object for 31st Dec 2020 passed in', () => {
      // set up
      const validDateObject = new Date('2020/12/31')
      // exercise
      const functionReturn = IsValidDate(validDateObject)
      // test
      assert.strictEqual(functionReturn, true)
    })
  })
})
