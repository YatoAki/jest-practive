import capitalize from '../src/capitalize';

test("All small letters", () =>{
  expect(capitalize("hello")).toBe("Hello");
})

test("All capital letters" ,() =>{
  expect(capitalize("HELLO")).toBe("Hello");
})

test("Blank letter" ,() =>{
  expect(capitalize("")).toBe("");
})

test("Special letters" ,() =>{
  expect(capitalize("Hel*%o")).toBe("Hel*%o");
})
