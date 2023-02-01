var btnHeight = 100;
var btnWidth =250;

var maxConstraintHeight = window.innerHeight-btnHeight;
var maxConstraintWidth = window.innerWidth-btnWidth;

var btn = document.querySelector("#btn");
btn.addEventListener('mouseover',randomize);

function randomize()
{
btn.style.left = Math.abs(Math.floor(Math.random() * (maxConstraintWidth+1))) + 'px';
btn.style.top = Math.abs(Math.floor(Math.random() * (maxConstraintHeight+1))) + 'px';
}

