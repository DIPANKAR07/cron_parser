import { FieldParser } from "../src/parser/FieldParser";

describe("FieldParser", () => {
  test("handles wildcard", () => {
    const parser = new FieldParser(0, 5);
    expect(parser.parse("*")).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("handles step values", () => {
    const parser = new FieldParser(0, 59);
    expect(parser.parse("*/15")).toEqual([0, 15, 30, 45]);
  });

  test("handles ranges", () => {
    const parser = new FieldParser(1, 10);
    expect(parser.parse("3-6")).toEqual([3, 4, 5, 6]);
  });

  test("handles lists and combinations", () => {
    const parser = new FieldParser(1, 10);
    expect(parser.parse("1-3,5,7")).toEqual([1, 2, 3, 5, 7]);
  });
});
