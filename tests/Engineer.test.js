const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    it("Should return an object type", () => {
        const object = new Engineer();
        expect(typeof(object)).toBe('object')
    })

    it("Should return a name when a name property is inputted" , () => {
        const object = new Engineer('ben');
        expect(typeof(object.name)).toBe('string');
    })

    it("Should return a name when a name property is inputted" , () => {
        const object = new Engineer('ben');
        expect(object.name).toBe('ben');
    })

    it("Should return an id when an id property is inputted", () => {
        const object = new Engineer('ben', 8);
        expect(typeof(object.id)).toBe('number')
    })

    it("Should return an id when an id property is inputted", () => {
        const object = new Engineer('ben', 8);
        expect(object.id).toBe(8)
    })

    it("Should return an email when an email property is inputted", () => {
        const object = new Engineer('ben', 8, 'ben@gmail.com');
        expect(typeof(object.email)).toBe('string')
    })

    it("Should return an email when an email property is inputted", () => {
        const object = new Engineer('ben', 8, 'ben@gmail.com');
        expect(object.email).toBe('ben@gmail.com')
    })
})