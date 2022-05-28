import caesarCipher from "../src/caesarCipher";

test("Small Letter Shift", () => {
  expect(caesarCipher("abcde",3)).toBe("defgh");
})

test("Cap letter Shift", () => {
  expect(caesarCipher("ABCDE",2)).toBe("CDEFG");
})

test("Mix letter Shift", () => {
  expect(caesarCipher("AbCdE",2)).toBe("CdEfG");
})

test("None Shfit", () => {
  expect(caesarCipher("Hello",0)).toBe("Hello");
})

test("Small Letter all corner Shfit", () => {
  expect(caesarCipher("xyz",5)).toBe("cde");
})

test("Cap Letter all corner Shfit", () => {
  expect(caesarCipher("XYZ",5)).toBe("CDE");
})

test("Cap Small Conor & normal Shfit", () => {
  expect(caesarCipher("xyYz",2)).toBe("zaAb");
})
