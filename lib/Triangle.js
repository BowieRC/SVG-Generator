const Shapes = require("../lib/Shapes")

class Triangle extends Shape{
    constructor(fillColor, borderColor, textColor, text){
        super(fillColor, borderColor, textColor, text)
     }
     renderShape(){
        this.catchError(this.fillColor, this.borderColor);
        this.catchTextLength(this.text);
        return `<svg height="140" width="140"><polygon points="70,00 0,140 140,140" stroke="${this.borderColor}" stoke-width='4' fill="${this.fillColor}"></polygon><text fill="${this.textColor}" font-size="40" x="35", y="100">${this.text}</text></svg>`
     }
}

module.exports = Triangle;
