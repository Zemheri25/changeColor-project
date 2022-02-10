let click = document.querySelector(".click");
let color1 = document.querySelector(".color1");

let arr1 = ["red", "yellow", "aqua", "blue", "coral", "brown", "crimson"];

click.addEventListener("click", changecolor);

function changecolor() {
    document.body.style.backgroundColor = arr1[Math.floor(Math.random()*7)];
    color1.innerHTML = document.body.style.backgroundColor
}