const suma = require("./suma");

test("adds 4 + 2 to equal 6", () => {
  expect(suma(4, 2)).toBe(6);
});

test("adds a + 2 to equal NaN", () => {
  expect(suma("a", 2)).toBe(NaN);
});
