const assert = require('assert')
const GetPrevOrNextDate = require('../utils/getPrevOrNextDate')

describe('test getting previous or next date based on args passed to params', () => {
  describe('handle invalid input gracefully', () => {
    let nextOrPreviousArg
    let targetDayArg
    let argDateArg

    beforeEach(() => {
      nextOrPreviousArg = 'next'
      targetDayArg = 'tuesday'
      argDateArg = new Date('2020/11/24')
    })

    it('should handle invalid arg passed nextOrPrevious param', () => {
      // set up
      const nextOrPreviousArg = 'test'
      // exercise
      const functionReturn = GetPrevOrNextDate(
        nextOrPreviousArg,
        targetDayArg,
        argDateArg
      )
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
    it('should handle invalid arg passed targetDay param', () => {
      // set up
      const targetDayArg = 'star wars day'
      // exercise
      const functionReturn = GetPrevOrNextDate(
        nextOrPreviousArg,
        targetDayArg,
        argDateArg
      )
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
    it('should handle invalid arg passed argDate param', () => {
      // set up
      argDateArg = {}
      // exercise
      const functionReturn = GetPrevOrNextDate(
        nextOrPreviousArg,
        targetDayArg,
        argDateArg
      )
      // test
      assert.strictEqual(functionReturn, 'Invalid input')
    })
  })

  describe('should return the next target day date', () => {
    const nextOrPreviousArg = 'next'

    it('should return date obj for 8th of Dec', () => {
      // set up
      const targetDayArg = 'tuesday'
      const argDate = new Date('2020/12/01')
      const expectedDate = new Date('2020/12/08')
      // exercise
      const functionReturn = GetPrevOrNextDate(nextOrPreviousArg)
      // test
      assert.deepStrictEqual(functionReturn, expectedDate)
    })
    it('it should return 18th of Dec', () => {
      // set up
      const targetDayArg = 'Friday'
      const argDate = new Date('2020/12/15')
      const expectedDate = new Date('2020/12/18')
      // exercise
      const functionReturn = GetPrevOrNextDate(nextOrPreviousArg)
      // test
      assert.deepStrictEqual(functionReturn, expectedDate)
    })
  })

  describe('should return the previous target day date', () => {
    const nextOrPreviousArg = 'previous'

    it('should return 24th Nov', () => {
      // set up
      const targetDayArg = 'tuesday'
      const argDate = new Date('2020/12/01')
      const expectedDate = new Date('2020/11/24')
      // exercise
      const functionReturn = GetPrevOrNextDate(nextOrPreviousArg)
      // test
      assert.deepStrictEqual(functionReturn, expectedDate)
    })
    it('should return 11th of Dec', () => {
      // set up
      const targetDayArg = 'Friday'
      const argDate = new Date('2020/12/15')
      const expectedDate = new Date('2020/12/11')
      // exercise
      const functionReturn = GetPrevOrNextDate(nextOrPreviousArg)
      // test
      assert.deepStrictEqual(functionReturn, expectedDate)
    })
  })
})
