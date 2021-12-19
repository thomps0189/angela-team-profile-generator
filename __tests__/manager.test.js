const Manager = require('../lib/manager');

test("create manager object", () => {
    const manager = new Manager("Nancy", 234, "nancy@test.com", "615-555-5555")

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("get manager's office number", () => {
    const manager = new Manager("Nancy", 234, "nancy@test.com", "615-555-5555")

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})

