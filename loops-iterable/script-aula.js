const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

//for(const fruta of frutas) {
 //   console.log(fruta);
//}

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons);


//fetch('https://pokeapi.co/api/v2/pokemon/')
//.then(({headers}) => console.log(headers));

const carro = {
    marca: 'Honda',
    ano: 2018,
  }
  
  for(const key in carro) {
    console.log(carro[key]);
  }
  
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

let i = 0;
do {
  console.log(i++)
} while (i <= 20);
