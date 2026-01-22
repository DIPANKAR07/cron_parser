export class FieldParser {
  constructor(
    private readonly min: number,
    private readonly max: number
  ) {}

  parse(field: string): number[] {
    const result = new Set<number>();
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

  private addRange(set: Set<number>, start: number, end: number) {
    for (let i = start; i <= end; i++) {
      set.add(i);
    }
  }
}
