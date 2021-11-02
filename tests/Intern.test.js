const Intern = require('../lib/intern')

// change role to intern, add school property and method

describe("Intern", () => {
    it("Should return an object type", () => {
        const object = new Intern();
        expect(typeof(object)).toBe('object');
    })

    it("Should return a name when a name property is inputted" , () => {
        const object = new Intern('ben');
        expect(object.name).toBe('ben');
    })

    it("Should return a name when the getName method is called", () => {
        const object = new Intern('ben');
        expect(object.getName()).toBe('ben');
    })

    it("Should return an id when an id property is inputted", () => {
        const object = new Intern('ben', 8);
        expect(object.id).toBe(8);
    })

    it("Should return an id when an getId method is called", () => {
        const object = new Intern('ben', 8);
        expect(object.getId()).toBe(8);
    })

    it("Should return an email when an email property is inputted", () => {
        const object = new Intern('ben', 8, 'ben@gmail.com');
        expect(object.email).toBe('ben@gmail.com');
    })

    it("Should return an email when an getEmail method is called", () => {
        const object = new Intern('ben', 8, 'ben@gmail.com');
        expect(object.getEmail()).toBe('ben@gmail.com');
    })

    it("Should return a role when getRole method is called", () => {
        const object = new Intern();
        expect(object.getRole()).toBe('Intern')
    })

    it("Should return a school when property is inputted", () => {
        const object = new Intern('ben', 8, 'ben@gmail.com', 'DU');
        expect(object.school).toBe('DU');
    });

    it("Should return a school when getSchool method is called", () => {
        const object = new Intern('ben', 8, 'ben@gmail.com', 'DU');
        expect(object.getSchool()).toBe('DU');
    });
    
})