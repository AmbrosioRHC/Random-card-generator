let selectNumero = document.querySelector(".numero")
let pintaSup = document.querySelector(".pinta-superior-izqquiera")
let pintaInf = document.querySelector(".pinta-inferior-derecha")


const newButton = document.createElement("button");
newButton.textContent = "Genera una nueva carta";
document.body.appendChild(newButton);

newButton.style.backgroundColor = "white"


newButton.addEventListener("click", function () {
    let numeroDeCarta = randomNumber();
    let tipoDePinta = randomPinta();
    let colorPintaParaCss = ifPinta(tipoDePinta)

    pintaSup.style.color = colorPintaParaCss;
    pintaInf.style.color = colorPintaParaCss;

    selectNumero.innerHTML = numeroDeCarta
    pintaSup.innerHTML = tipoDePinta
    pintaInf.innerHTML = tipoDePinta

});


function randomNumber() {
    let num = Math.floor(Math.random() * 13 + 1);
    if (num > 1 && num < 11) return num;
    else if (num == 1) return "A";
    else if (num == 11) return "J";
    else if (num == 12) return "Q";
    else if (num == 13) return "K";
};

let numeroDeCarta = randomNumber()

console.log(numeroDeCarta)

function randomPinta() {
    let pinta = Math.floor(Math.random() * 4 + 1);
    if (pinta == 1) return "♦";
    else if (pinta == 2) return "♥";
    else if (pinta == 3) return "♠";
    else if (pinta == 4) return "♣";

};

let tipoDePinta = randomPinta()

console.log(tipoDePinta)

// Función que asigna color a las pintas

function ifPinta(pintaGenerada) {
    if (pintaGenerada == "♦" || pintaGenerada == "♥") return "red";
    else if (pintaGenerada == "♠" || pintaGenerada == "♣") return "black";
}

let colorPintaParaCss = ifPinta(tipoDePinta)

pintaSup.style.color = colorPintaParaCss;
pintaInf.style.color = colorPintaParaCss;

selectNumero.innerHTML = numeroDeCarta
pintaSup.innerHTML = tipoDePinta
pintaInf.innerHTML = tipoDePinta



