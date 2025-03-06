/*function Button (text, backgroud){
    this.text = text;
    this.backgroud = backgroud;
}

Button.prototype.element = function(){
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.backgroud;
    return buttonElement;
}
*/

class Button {
    constructor(text, backgroud, color){
        this.text = text;
        this.backgroud = backgroud;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.backgroud;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target){
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    static blueButton(text){
        return new Button(text, 'blue', 'white');
    }
}

const botaoAzul = Button.blueButton('Comprar');

//console.log(blueButton.appendTo('body'));


/*class Button {
    constructor (options){
        this.options = options;
    }
    static createButton(text, backgroud){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        buttonElement.style.background = backgroud;
        return buttonElement;
    }
}

const blueButton = new Button({
    backgroud: 'blue',
    text: 'white',
    color: 'white',
})

const blueButtonStatic = Button.createButton('Clique', 'blue');

console.log(blueButtonStatic);
*/