const Shapes = require("../lib/Shapes")

class Circle extends Shape{
    constructor(fillColor, borderColor, textColor, text){
       super(fillColor, borderColor, textColor, text)
    }

    renderShape(){
        this.catchError(this.fillColor, this.borderColor);
        this.catchTextLength(this.text);
        return `<svg width = "100" height = "100"><circle cx="50" cy="50" r="49" stroke="${this.borderColor}" stoke-width="4" fill="${this.fillColor}"></circle><text fill="${this.textColor}"font-size="40" x="18", y="60">${this.text}</text></svg>`
    }
}

module.exports = Square;