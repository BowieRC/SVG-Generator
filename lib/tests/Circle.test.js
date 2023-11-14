const Circle = require("../Circle.js")

describe('Circle', () => {
    describe("catch fillColor error", () => {
        it("Should throw an error when the fill color is empty", () => {
            const error = "Must enter a fill color.";
            const circle = new Circle("", "blue");
            expect(() => {circle.renderShape()}).toThrow(error);
        });
        
    })
    describe("catch borderColor error", () => {
        it("Should throw an error when the border color is empty", () => {
            const error = "Must enter a border color.";
            const circle = new Circle("blue", "");
            expect(() => {circle.renderShape()}).toThrow(error);
        });
        
    })
    describe("Catch text length error", () => {
        it("Should contain no more than 3 text characters", () => {
            const error = "Text must be no more than 3 characters";
            const circle = new Circle("blue", "green", "orange", "ABCD");
            expect(() => {circle.renderShape()}).toThrow(error);
        });
    });
    describe("Render SVG", () => {
        it("Should render a correct circle", () => {
            const circle = new Circle('blue', 'green', "red", "ABC");
            expect(circle.renderShape()).toEqual(`<svg width = "100" height = "100"><circle cx="50" cy="50" r="49" stroke="green" stoke-width="4" fill="blue"></circle><text fill="red"font-size="40" x="18", y="60">ABC</text></svg>`)
        })
    })
})
