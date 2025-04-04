function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(ganhador + ' ganhou um ' + premio)
    });
  }
  
  const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto']
  anunciarGanhadores('Carro', ...ganhadores);
  
  
  const frutas = ['Banana', 'Uva', 'Morango'];
  const legumes = ['Cenoura', 'Batata'];
  
  const comidas = [...frutas, 'Pizza', ...legumes];
  
  console.log(comidas);
  
  const todosOsNumeros = [3,4,5,12,3,3,24,2,3,4];
  const numeroMaximo = Math.max(...todosOsNumeros);
  
  console.log(numeroMaximo);
  
  const btns = document.querySelectorAll('button');
  
  console.log(btns)
  
  const btnsArray = [...btns];
  
  console.log(btnsArray);