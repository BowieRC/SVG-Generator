const Square = require("../Square.js")


describe('Square', () => {
    describe("catch fillColor error", () => {
        it("Should throw an error when the fill color is empty", () => {
            const error = "Must enter a fill color.";
            const square = new Square("", "blue");
            expect(() => {square.renderShape()}).toThrow(error);
        });
        
    })
    describe("catch borderColor error", () => {
        it("Should throw an error when the border color is empty", () => {
            const error = "Must enter a border color.";
            const square = new Square("blue", "");
            expect(() => {square.renderShape()}).toThrow(error);
        });
        
    })
    describe("Catch text length error", () => {
        it("Should contain no more than 3 text characters", () => {
            const error = "Text must be no more than 3 characters";
            const square = new Square("blue", "green", "orange", "ABCD");
            expect(() => {square.renderShape()}).toThrow(error);
        });
    });
    describe("Render SVG", () => {
        it("Should render a correct square", () => {
            const square = new Square('green', 'blue', 'orange', 'abc');
            expect(square.renderShape()).toEqual(`<svg width = "100" height = "100"><rect width="100" height="100" stroke="blue" stoke-width='4' fill="green"></rect><text fill="orange" font-size="40" x="20", y="65">abc</text></svg>`)
        })
    })
})
