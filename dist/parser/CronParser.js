"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronParser = void 0;
const FieldParser_1 = require("./FieldParser");
class CronParser {
    parse(expression) {
        const parts = expression.split(" ");
        if (parts.length < 6) {
            throw new Error("Invalid cron expression");
        }
        const [minute, hour, dayOfMonth, month, dayOfWeek, ...command] = parts;
        return {
            minute: new FieldParser_1.FieldParser(0, 59).parse(minute),
            hour: new FieldParser_1.FieldParser(0, 23).parse(hour),
            dayOfMonth: new FieldParser_1.FieldParser(1, 31).parse(dayOfMonth),
            month: new FieldParser_1.FieldParser(1, 12).parse(month),
            dayOfWeek: new FieldParser_1.FieldParser(0, 6).parse(dayOfWeek),
            command: command.join(" ")
        };
    }
}
exports.CronParser = CronParser;
