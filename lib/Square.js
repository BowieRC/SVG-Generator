const Shapes = require("../lib/Shapes")

class Square extends Shapes{
    constructor(fillColor, borderColor, textColor, text){
        super(fillColor, borderColor, textColor, text)
     }
    renderShape(){
        this.catchError(this.fillColor, this.borderColor);
        this.catchTextLength(this.text);
        return `<svg width = "100" height = "100"><rect width="100" height="100" stroke="${this.borderColor}" stoke-width='4' fill="${this.fillColor}"></rect><text fill="${this.textColor}" font-size="40" x="20", y="65">${this.text}</text></svg>`
    }
}

module.exports = Square;