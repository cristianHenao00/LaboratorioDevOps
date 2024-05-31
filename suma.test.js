const suma = require("./suma");

test("adds 1 + 2 to equal 3", () => {
  expect(suma(1, 4)).toBe(3);
});

test("adds a + 2 to equal NaN", () => {
  expect(suma("a", 2)).toBe(NaN);
});
