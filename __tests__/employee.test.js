const { TestWatcher } = require("@jest/core");
const employee = require("../lib/employee");

test("if employee is a string", () => {
    expect(employee).toBe("")
});