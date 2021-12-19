const Intern = require("../lib/intern");

test("creates intern object", () => {
    const intern = new Intern("Jim", "123", "test@test.com", "Vanderbilt University");

    expect(intern.school).toEqual(expect.any(String));
});