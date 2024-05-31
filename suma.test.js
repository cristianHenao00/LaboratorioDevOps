const suma = require("./suma");

test("adds 1 + 2 to equal 3", () => {
  expect(suma(1, 2)).toBe(3);
});

test("adds a + 2 to equal NaN", () => {
  expect(suma("1", 2)).toBe(NaN);
});
