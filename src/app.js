import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi ave'];
let action = ['masticó', 'derribó', 'aplastó', 'rompió'];
let what = ['mi tarea', 'mi teléfono', 'mi maqueta'];
let when = ['antes de clase', 'cuando estaba durmiendo', 'mientras hacia ejercicio', 'durante la comida', 'mientras estaba jugando'];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  // Generar una excusa aleatoria
  let randomWho = getRandom(who);
  let randomAction = getRandom(action);
  let randomWhat = getRandom(what);
  let randomWhen = getRandom(when);

  // he utilizado esto por que considero que es una version mas optima en ves de usar la concatenacion comun de "+" 
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`; 
  
  // Mostrar la excusa en el elemento con id 'excuse'
  document.querySelector('#excuse').innerHTML = excuse;

  console.log("Hello Rigo from the console!");
};