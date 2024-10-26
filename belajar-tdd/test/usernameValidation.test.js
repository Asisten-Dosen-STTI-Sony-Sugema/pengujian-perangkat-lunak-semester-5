const validateUsername = require("../src/usernameValidation");

test("username must not be empty", () => {
  expect(validateUsername("")).toBe(false);
});

test("username must be more than 6 characters", () => {
  expect(validateUsername("user")).toBe(false);
});

test("username must start with capital letter", () => {
  expect(validateUsername("username")).toBe(false);
  expect(validateUsername("Vannico")).toBe(true);
});

test("username must meet all criterias", () => {
  expect(validateUsername("soni")).toBe(false);
  expect(validateUsername("Kevin")).toBe(false);
  expect(validateUsername("kevin hansen")).toBe(false);
  expect(validateUsername("Trinata Suryawan")).toBe(true);
});
