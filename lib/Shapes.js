class Shape{
    constructor(fillColor, borderColor, textColor, text){
        this.fillColor = fillColor;
        this.borderColor = borderColor;
        this.textColor = textColor;
        this.text = text;
    }
    catchError(fillColor, borderColor){
        if(fillColor == "" || fillColor == " "){
            throw new Error("Must enter a fill color.");
        }
        if(borderColor == "" || borderColor == " "){
            throw new Error("Must enter a border color.");
        }
    }

    catchTextLength(text){
        if(text.length > 3){
            throw new Error("Text must be no more than 3 characters");
        }
    }

    renderShape(){
        throw new Error("Shape class must not be called directly")
    }
}

module.exports = Shape;