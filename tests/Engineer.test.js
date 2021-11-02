const Engineer = require('../lib/engineer')

// change role to engineer, and add github property and method

describe("Engineer", () => {
    it("Should return an object type", () => {
        const object = new Engineer();
        expect(typeof(object)).toBe('object');
    });

    it("Should return a name when a name property is inputted" , () => {
        const object = new Engineer('ben');
        expect(object.name).toBe('ben');
    });

    it("Should return a name when the getName method is called", () => {
        const object = new Engineer('ben');
        expect(object.getName()).toBe('ben');
    });

    it("Should return an id when an id property is inputted", () => {
        const object = new Engineer('ben', 8);
        expect(object.id).toBe(8);
    });

    it("Should return an id when an getId method is called", () => {
        const object = new Engineer('ben', 8);
        expect(object.getId()).toBe(8);
    });

    it("Should return an email when an email property is inputted", () => {
        const object = new Engineer('ben', 8, 'ben@gmail.com');
        expect(object.email).toBe('ben@gmail.com');
    });

    it("Should return an email when an getEmail method is called", () => {
        const object = new Engineer('ben', 8, 'ben@gmail.com');
        expect(object.getEmail()).toBe('ben@gmail.com');
    });

    it("Should return a role when getRole method is called", () => {
        const object = new Engineer();
        expect(object.getRole()).toBe('Engineer');
    });

    it("Should return a github username when property is inputted", () => {
        const object = new Engineer('ben', 8, 'ben@gmail.com', 'ben8');
        expect(object.github).toBe('ben8');
    });

    it("Should return a github username when getGithub method is called", () => {
        const object = new Engineer('ben', 8, 'ben@gmail.com', 'ben8');
        expect(object.getGithub()).toBe('ben8');
    });
})