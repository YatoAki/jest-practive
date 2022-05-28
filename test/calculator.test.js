import Calculator from "../src/calculator.js"

test("Add" , () => {
  expect(Calculator.add(1,2)).toBe(3);
})

test("Subtract" , () => {
  expect(Calculator.sub(2,1)).toBe(1);
})

test("Multiply", () => {
  expect(Calculator.multi(3,4)).toBe(12);
})

test("Divide", () => {
  expect(Calculator.div(4,2)).toBe(2);
})

test("Divide with decimal", () => {
  expect(Calculator.div(3,2)).toBe(1.5);
})

test("Not Divisible", () => {
  expect(Calculator.div(5,0)).toBe(null);
})
