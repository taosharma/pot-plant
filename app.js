const growingArea = document.querySelector('#growing-area');

const pot = document.createElement('polygon');

pot.style.points = '0,100 50,25 50,75 100,0';

console.log(pot);

growingArea.appendChild(pot);
