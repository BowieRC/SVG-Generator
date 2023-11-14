const Shape = require("../Shapes.js")
// const Triangle = require("../Triangle.js")

describe('Shape', () => {
    describe('renderShape()', () => { 
      it('should throw an error when being called directly', () => {
        const error = "Shape class must not be called directly";
        const shape = new Shape();
        expect(() => {shape.renderShape()}).toThrow((error));
      });
    })
});