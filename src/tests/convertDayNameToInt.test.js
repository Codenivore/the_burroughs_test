const assert = require('assert')
const ConvertDayNameToInt = require('../utils/convertDayNameToInt')

describe('make sure day name convert works', () => {
  describe('handles invalid input gracefully', () => {
    it('should return invalid input if not passed a correct day', () => {
      // set up
      const invalidDayNameArg = 'Pancake day'
      // exercise
      const functionReturn = ConvertDayNameToInt(invalidDayNameArg)
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
    it('should return invalid input if not passed a string', () => {
      // set up
      const invalidDayNameArg = 101
      // exercise
      const functionReturn = ConvertDayNameToInt(invalidDayNameArg)
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
  })
  describe('should return int of the day name it is passed', () => {
    // set up
    const daysAsIntsArray = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'satrurday'
    ]

    const daysToBeTested = [
      'suNDay',
      'Monday',
      'tuesday',
      'wednesday',
      'thursDay',
      'FRIday',
      'satrurday'
    ]

    daysToBeTested.forEach((elem, idx) => {
      it(`should return ${idx} for ${daysAsIntsArray[idx]}`, () => {
        // excersise
        const functionReturn = ConvertDayNameToInt(elem)
        // test
        assert.strictEqual(functionReturn, idx)
      })
    })
  })
})
