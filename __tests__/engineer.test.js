const Engineer = require("../lib/engineer");

test("creates engineer object", () => {
    const engineer = new Engineer("Jim", "123", "test@test.com", "testuser");
 
    expect(engineer.github).toEqual(expect.any(String));
 });