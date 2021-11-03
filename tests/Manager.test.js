const Manager = require('../lib/manager')

// change role to manager, add office number property (perhaps add a method as well?)

describe("Manager", () => {
    it("Should return an object type", () => {
        const object = new Manager();
        expect(typeof(object)).toBe('object');
    })

    it("Should return a name when a name property is inputted" , () => {
        const object = new Manager('ben');
        expect(object.name).toBe('ben');
    })

    it("Should return a name when the getName method is called", () => {
        const object = new Manager('ben');
        expect(object.getName()).toBe('ben');
    })

    it("Should return an id when an id property is inputted", () => {
        const object = new Manager('ben', 8);
        expect(object.id).toBe(8);
    })

    it("Should return an id when an getId method is called", () => {
        const object = new Manager('ben', 8);
        expect(object.getId()).toBe(8);
    })

    it("Should return an email when an email property is inputted", () => {
        const object = new Manager('ben', 8, 'ben@gmail.com');
        expect(object.email).toBe('ben@gmail.com');
    })

    it("Should return an email when an getEmail method is called", () => {
        const object = new Manager('ben', 8, 'ben@gmail.com');
        expect(object.getEmail()).toBe('ben@gmail.com');
    })

    it("Should return a role when getRole method is called", () => {
        const object = new Manager();
        expect(object.getRole()).toBe('Manager')
    })

    it("Should return an office number when property is inputted", () => {
        const object = new Manager('ben', 8, 'ben@gmail.com', 225);
        expect(object.office).toBe(225);
    });  
})