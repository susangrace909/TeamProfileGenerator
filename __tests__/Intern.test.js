const Intern = require("../lib/Intern");

test("Can set School via constructor", () => {
  const testValue = "InternSchool";
  const e = new Intern("Inty", 1, "intern@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Inty", 1, "intern@gmail.com", "schoolName");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school name via getSchool()", () => {
  const testValue = "schoolName";
  const e = new Intern("Inty", 1, "intern@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
