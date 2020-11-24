const { Command } = require('commander')
const { prompt } = require('inquirer')
const chalk = require('chalk')

const { log } = console

const GetReport = require('./src/utils/getReport')

// ignore eslint no-console for this file
/* eslint-disable no-console */

const program = new Command()
program.version('1.0.0').description('Payday System')

// Going to use this more than once
const reportHeader = ['Year', 'Month', 'BonusDay', 'PayDay']

program
  .command('getStandardReport')
  .alias('sr')
  .description('Get payday report for the next twelve months')
  .action(() => {
    const report = GetReport()
    log(chalk.bold.blue(reportHeader.join(',')))
    report.forEach((elem) => {
      log(
        chalk.green(
          [
            elem.year,
            elem.month,
            elem.bonusDay.toLocaleDateString(),
            elem.payDay.toLocaleDateString()
          ].join(',')
        )
      )
    })
  })

// questions array for custom questions
const customReportQuestionsArray = [
  {
    type: 'input',
    name: 'startDate',
    message:
      'When would you like the report to start from? Please provide input in YYYY/MM/DD format. '
  },
  {
    type: 'input',
    name: 'duration',
    message:
      'How many months would you like to run the report for? Please inbut a number between 1 and 1200 without leading zeros.'
  }
]

program
  .command('getCustomReport')
  .alias('cr')
  .description(
    'Get payday report from a custom date for up to the next 100 years.'
  )
  .action(() => {
    prompt(customReportQuestionsArray)
      .then((responses) => {
        // destructure response object
        const { startDate, duration } = responses

        // change string input for start date to date object
        const startDateObject = new Date(startDate)

        const report = GetReport({
          dateFrom: startDateObject,
          monthsTo: duration
        })

        if (report !== 'Invalid input') {
          log(chalk.bold.blue(reportHeader.join(',')))
        }

        report.forEach((elem) => {
          log(
            chalk.green(
              [
                elem.year,
                elem.month,
                elem.bonusDay.toLocaleDateString(),
                elem.payDay.toLocaleDateString()
              ].join(',')
            )
          )
        })
      })
      .catch(() => {
        log(
          chalk.bold.red('Did you input your answers in the requested format?')
        )
      })
  })

program.parse(process.argv)
