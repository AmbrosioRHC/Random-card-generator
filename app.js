let selectNumero = document.querySelector(".numero")
let pintaSup = document.querySelector(".pinta-superior-izqquiera")
let pintaInf = document.querySelector(".pinta-inferior-derecha")

// Agregando boton para generar nueva carta 

const newButton = document.createElement("button");
newButton.textContent = "Genera una nueva carta";
document.body.appendChild(newButton);
newButton.style.backgroundColor = "white"

// Agregando boton que ejecuta un temporizador 

const secondButton = document.createElement("button");
secondButton.textContent = "Temporizador 10 segundos";
document.body.appendChild(secondButton);
secondButton.style.backgroundColor = "white"

// addEventListener que genera carta al clickear boton

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

// addEventListener que ejecuta el temporizador al clickear boton

secondButton.addEventListener("click", function () {
    setTimeout(function () {
        let numeroDeCarta = randomNumber();
        let tipoDePinta = randomPinta();
        let colorPintaParaCss = ifPinta(tipoDePinta)

        pintaSup.style.color = colorPintaParaCss;
        pintaInf.style.color = colorPintaParaCss;

        selectNumero.innerHTML = numeroDeCarta
        pintaSup.innerHTML = tipoDePinta
        pintaInf.innerHTML = tipoDePinta
    }, 10000);
});

// Modificar ancho y alto 

let carta = document.querySelector(".carta");
let userAncho = document.querySelector("#anchoUser");
userAncho.addEventListener("change", function (e) {
    let ancho = e.target.value
    return carta.style.width = ancho + "px";
})

let userAlto = document.querySelector("#altoUser");
userAlto.addEventListener("change", function (e) {
    let alto = e.target.value
    console.log(alto)
    return carta.style.height = alto + "px";
})



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



