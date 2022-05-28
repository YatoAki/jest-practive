import analyzeArray from "../src/analyzeArray.js"

test("Check Length", () => {
  expect(analyzeArray([1,2,3,4,5]).length).toBe(5)
})

test("Max", () => {
  expect(analyzeArray([1,8,3,4,5]).max).toBe(8)
})

test("Min", () => {
  expect(analyzeArray([1,8,3,4,5]).min).toBe(1)
})

test("Average", () => {
  expect(analyzeArray([1,8,3,4,5]).average).toBe(4.2)
})
