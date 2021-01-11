// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges!'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hello, Platzi Badges from react!</h1>;
// const element = React.createElement('a', { href: 'http://platzi.com' }, 'Ir a platzi.')

// const name = 'Eric'
// const sum = () => 3 + 3
// const element = React.createElement("h1", {}, `Hola soy ${name}`);
// const jsx = <h1> Hola soy , {sum()} </h1>

const jsx = (
  <div>
    <h1>Hola, soy Eric</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
)

const element = React.createElement(
  'div', 
  {}, 
  React.createElement('h1', {}, 'Hola, soy Eric'),
  React.createElement('p', {}, 'Soy ingeniero de la web.')
)

const container = document.getElementById("app");

// ReactDOM.render(__qué__,__dónde__)
ReactDOM.render(element, container);
