const Manager = require("../lib/Manager");

test("Can set office number via constructor", () => {
  const testValue = "OfficeNumber";
  const e = new Manager("Manny", 1, "12", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Manny", 1, "manager@gmail.com", "12");
  expect(e.getRole()).toBe(testValue);
});
