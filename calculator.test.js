const Calculator = require("./calculator");
const myObj = new Calculator();

describe("calculator", () => {
  describe("divide", () => {
    // Divide

    test("divide two numbers", () => {
      expect(myObj.divide(10, 5)).toBe(2);
    });

    test("divide two numbers", () => {
      expect(myObj.divide(90, 2)).toBe(45);
    });

    test("divide two numbers", () => {
      expect(myObj.divide(110, 10)).toBe(11);
    });
  });

  describe("multiply", () => {
    // Multiply

    test("multiply two numbers", () => {
      expect(myObj.multiply(9, 7)).toBe(63);
    });

    test("multiply two numbers", () => {
      expect(myObj.multiply(4, 4)).toBe(16);
    });

    test("multiply two numbers", () => {
      expect(myObj.multiply(2, 5)).toBe(10);
    });
  });

  describe("subtract", () => {
    // Subtract

    test("subtract two numbers", () => {
      expect(myObj.subtract(9, 7)).toBe(2);
    });

    test("subtract two numbers", () => {
      expect(myObj.subtract(20, 24)).toBe(-4);
    });

    test("subtract two numbers", () => {
      expect(myObj.subtract(10, 10)).toBe(0);
    });
  });

  describe("add", () => {
    // Add

    test("adding two numbers", () => {
      expect(myObj.add(4, 7)).toBe(11);
    });

    test("adding two numbers", () => {
      expect(myObj.add(2, 5)).toBe(7);
    });

    test("adding two numbers", () => {
      expect(myObj.add(454, 400)).toBe(854);
    });
  });
});
