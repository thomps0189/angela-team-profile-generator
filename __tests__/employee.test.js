const Employee = require("../lib/employee");

test("creates employee object", () => {
   const employee = new Employee("Jim", "123", "test@test.com");

   expect(employee.employeeName).toBe("Jim");
   expect(employee.id).toBe("123");
   expect(employee.email).toBe("test@test.com");
});