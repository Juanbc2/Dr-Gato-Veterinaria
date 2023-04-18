const ingreso = require("./ingreso");

const email1 = "test1234@gmail.com";
const email2 = "asdas";
const email3 = "12312@d";
const email4 = "qweqweq@dds.c";

test("Login exitoso", () => {
  expect(ingreso(email1)).toBe(true);
});

test("Login fallido", () => {
  expect(ingreso(email2)).toBe(false);
});

test("Login fallido", () => {
  expect(ingreso(email3)).toBe(false);
});

test("Login fallido", () => {
  expect(ingreso(email4)).toBe(false);
});
