# Cron Expression Parser

A small command-line tool that reads a cron schedule and shows when it will run.

---

## What this does

This tool takes a cron ezpression as input and prints out all the times at which the job will run.
Each part of the schedule is expanded and shown in a simple table so it’s easy to understand.

---

## How to run

```bash
# Install dependencies
npm install

# Run unit tests
npm test

# Build the project
npm run build

# Run the program
node dist/index.js "*/15 0 1,15 * 1-5 /usr/bin /find"
