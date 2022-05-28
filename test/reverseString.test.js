import reverseString from "../src/reverseString.js";

test("work" , () => {
  expect(reverseString("hello")).toBe("olleh");
})

test("String with space" , () => {
  expect(reverseString("Nice to meet")).toBe("teem ot eciN");
})

test("Empty String" , () => {
  expect(reverseString("")).toBe("");
})
