const Spiderman = require('./../app/spiderman.js')

describe("Test Suite Dummy Description", ()=>{
    test("Case dummy", () => {
        const resultofsomething = 1 + 2
        expect(resultofsomething).toBe(3)
    })
})

describe("Unit Test for SpiderMan Class", () => {
    test("1) Create an spiderman object", () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })
})