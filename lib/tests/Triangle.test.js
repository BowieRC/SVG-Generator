const Triangle = require("../Triangle.js")

describe('Triangle', () => {
    describe("catch fillColor error", () => {
        it("Should throw an error when the fill color is empty", () => {
            const error = "Must enter a fill color.";
            const triangle = new Triangle("", "blue");
            expect(() => {triangle.renderShape()}).toThrow(error);
        });
        
    })
    describe("catch borderColor error", () => {
        it("Should throw an error when the border color is empty", () => {
            const error = "Must enter a border color.";
            const triangle = new Triangle("blue", "");
            expect(() => {triangle.renderShape()}).toThrow(error);
        });
        
    })
    describe("Catch text length error", () => {
        it("Should contain no more than 3 text characters", () => {
            const error = "Text must be no more than 3 characters";
            const triangle = new Triangle("blue", "green", "orange", "ABCD");
            expect(() => {triangle.renderShape()}).toThrow(error);
        });
    });
    describe("Render SVG", () => {
        it("Should render a correct triangle", () => {
            const triangle = new Triangle('blue', 'green', 'red', 'ABC');
            expect(triangle.renderShape()).toEqual(`<svg height="140" width="140"><polygon points="70,00 0,140 140,140" stroke="green" stoke-width='4' fill="blue"></polygon><text fill="red" font-size="40" x="35", y="100">ABC</text></svg>`)
        })
    })
})