# SVG Generator 
![Static Badge](https://img.shields.io/badge/Licence-MIT_License-blue)
## Table of Contents: 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description:
Create placeholder SVG Logos, to save time and money when coding quickly.
## Installation: 
Run 'Node Index.js' from the node terminal
## Usage: 
Follow prompts from the node terminal
## Licence: 
**MIT License** <br>
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.            
## Contributing:
Do not push directly into the main branch
## Tests:
All tests can be run from npm run test

Checks shape is not called directly
```
describe('Shape', () => {
    describe('renderShape()', () => { 
      it('should throw an error when being called directly', () => {
        const error = "Shape class must not be called directly";
        const shape = new Shape();
        expect(() => {shape.renderShape()}).toThrow((error));
      });
    })
});
```

Checks all extended classes are filled with the correct information, and generate the correct code.
Repeats for Circle, Square, and Triangle classes
```
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

```
## Questions:
Find my work at [BowieRC](https://github.com/BowieRC), or email me at rowlandscrispebowie@gmail.com.
