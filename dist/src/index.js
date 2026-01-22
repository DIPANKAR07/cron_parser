#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CronParser_1 = require("./parser/CronParser");
const input = process.argv[2];
if (!input) {
    console.error("Please provide a cron expression");
    process.exit(1);
}
const parsed = new CronParser_1.CronParser().parse(input);
function printRow(label, value) {
    const paddedLabel = label.padEnd(14, " ");
    const output = Array.isArray(value) ? value.join(" ") : value;
    console.log(paddedLabel, output);
}
printRow("minute", parsed.minute);
printRow("hour", parsed.hour);
printRow("day of month", parsed.dayOfMonth);
printRow("month", parsed.month);
printRow("day of week", parsed.dayOfWeek);
printRow("command", parsed.command);
