"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldParser = void 0;
class FieldParser {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    parse(field) {
        const result = new Set();
        const parts = field.split(",");
        for (const part of parts) {
            if (part === "*") {
                this.addRange(result, this.min, this.max);
            }
            else if (part.includes("/")) {
                const [range, step] = part.split("/");
                const stepValue = Number(step);
                const start = range === "*" ? this.min : Number(range);
                for (let i = start; i <= this.max; i += stepValue) {
                    result.add(i);
                }
            }
            else if (part.includes("-")) {
                const [start, end] = part.split("-").map(Number);
                this.addRange(result, start, end);
            }
            else {
                result.add(Number(part));
            }
        }
        return Array.from(result).sort((a, b) => a - b);
    }
    addRange(set, start, end) {
        for (let i = start; i <= end; i++) {
            set.add(i);
        }
    }
}
exports.FieldParser = FieldParser;
