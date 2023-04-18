const ingreso = require('./ingreso')
const auth = getAuth();

const email = "test1234@gmail.com"
const password = "123456"

test('Login exitoso', () => {
    expect(ingreso(auth,email, password)).toBe(true);
  });