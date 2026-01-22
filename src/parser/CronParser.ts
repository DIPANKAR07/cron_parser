import { FieldParser } from "./FieldParser";

export class CronParser {
  parse(expression: string) {
    const parts = expression.split(" ");
    if (parts.length < 6) {
      throw new Error("Invalid cron expression");
    }

    const [minute, hour, dayOfMonth, month, dayOfWeek, ...command] = parts;

    return {
      minute: new FieldParser(0, 59).parse(minute),
      hour: new FieldParser(0, 23).parse(hour),
      dayOfMonth: new FieldParser(1, 31).parse(dayOfMonth),
      month: new FieldParser(1, 12).parse(month),
      dayOfWeek: new FieldParser(0, 6).parse(dayOfWeek),
      command: command.join(" ")
    };
  }
}
