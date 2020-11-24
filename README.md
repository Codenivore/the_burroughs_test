# the_burroughs_test

---

Command line utility to provide either a standard 12 month report of when to pay staff their bonuses or salary or alternatively use the prompt questions to generate a custom report.

### Set up

- clone down repo
- run `npm i` in your terminal

### Commands Cheat Sheet

- `node index -h`: Shows commans and options
- `node index sr`: Get standard 12 month report without being asked any questions
- `node index cr`: Custom report. It will ask you to provide your desired start date and the duration.

### Potential Feature Enhancement Considered

- Include bank holidays but then the user's locale would need to be considered too.
- Could make a command to output the report to a text or CSV file.

### If I had more time

- I couldn't get the symlink to work as I was hoping that the commands could be called from anywhere and without the need to put node in front of it. I did have a quick gander into and it seemed to relate to windows and access permissions.

- Tests for the index file and look into chai and using that with mocha.

- Make the output look nicer.
