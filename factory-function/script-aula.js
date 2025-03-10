/*function createButton(text) {
    function element() {
      const buttonElement = document.createElement('button');
      buttonElement.innerText = text;
      return buttonElement;
    }
    return {
      element: element,
      text: text,
    }
  }
  
  const comprarBtn = createButton('Comprar');
  */

  function Pessoa(nome) {
    if (!(this instanceof Pessoa)) // ou (!new.target)
      return new Pessoa(nome);
    this.nome = nome;
  }
  
  Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
  }
  
  const designer = Pessoa('Mateus');
  