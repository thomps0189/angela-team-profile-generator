const Employee = require("../lib/employee");

test("creates employee object", () => {
   const employee = new Employee("Jim", "123", "test@test.com");

   expect(employee.employeeName).toBe("Jim");
   expect(employee.id).toBe("123");
   expect(employee.email).toBe("test@test.com");
});

test("get employee name", () => {
    const employee = new Employee("Jim", "123", "test@test.com");

    expect(employee.getName()).toEqual(expect.any(String));
})

test("get employee id number", () => {
    const employee = new Employee("Jim", 123, "test@test.com");
    expect(employee.getId()).toEqual(expect.any(Number))
});

test("get employee email", () => {
    const employee = new Employee("Jim", 123, "test@test.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
})