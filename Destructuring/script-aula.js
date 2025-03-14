/*const cliente = {
    nome: 'Andre',
    compras: {
      digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
        cadernos: ['Caderno 1']
      }
    }
  }
  
  
  const {fisicas, digitais, digitais: {livros, videos}} = cliente.compras;

  console.log(fisicas);
  console.log(livros);
  console.log(videos);
  console.log(digitais);


const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;

console.log(terceira);

*/

function handleKeyboard({key, keyCode}) {
    console.log(key, keyCode);
  }

  document.addEventListener('keyup', handleKeyboard);
  