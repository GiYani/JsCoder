/////calculo IMC
/*
let nombre = prompt("¿cual es tu nombre?");
alert(`hola ${nombre}`);

let peso = Number(prompt("ingrese su peso en kg"));
let datoSi = "si"
let correcto = prompt(` ${peso} kg ¿ es correcto ?`);
if (correcto != datoSi) {
    do {
        alert("debe ingresar su peso en kg");
        peso = Number(prompt("ingrese su peso en kg"));
        correcto = prompt(` ${peso} kg ¿ es correcto ?`);
    }
    while (correcto != datoSi);

} else(correcto == datoSi); {
    console.log(peso)
}

let Altura = Number(prompt("ingrese su altura en metros"));
let datoSI = "si"
let correcTo = prompt(` ${Altura}   metros ¿ es correcto ?`);
if (correcTo != datoSI) {
    do {
        alert("debe ingresar su altura en metros");
        Altura = Number(prompt("ingrese su altura en metros"));
        correcTo = prompt(` ${Altura}   metros ¿ es correcto ?`);
    }
    while (correcTo != datoSI);

} else(correcTo == datoSI); {
    console.log(Altura)
}

let num1 = peso;
let num2 = Altura;
let imc = num1 / (num2 * num2);

if (imc <= 18.5) {
    alert(`su IMC ${imc} es bajo`);
} else if (imc >= 18.6 && imc <= 25) {
    alert(`su IMC ${imc} es normal`);
} else if (imc >= 25.1 && imc <= 29.9) {
    alert(`su IMC ${imc}, tiene sobrepeso`);
} else {
    alert(`su IMC ${imc}, tiene indice obeso`);
}


//calorias tiene tu desayuno



function desayunoCalDatos() {
    let rodajaPan = Number(prompt("ingrese cuantas rodajas de pan consume en su desayuno"));
    let dulce = Number(prompt("Cuantas cucharadas de dulce consume"));
    let queso = Number(prompt("cuantos casette de queso consume"));
    let bebida = Number(prompt("ingrese cuantas tazas de infusion toma"));
    console.log(desayuno(rodajaPan, dulce, queso, bebida));

}

function desayuno(a, b, c, d) {


    let cal = Number(a * 80 + b * 64 + c * 90 + d * 10);

    mostrarResultado(cal)
}

function mostrarResultado(kcal) {

    console.log(kcal)
    alert(kcal)
}

desayunoCalDatos()


///panificados
let pan = "nombre";
let kcal = Number("calorias");
let proteinas = Number("gramos Proteinas");
let grasas = Number("gramos Grasas");


const pan1 = {
    pan: "pan lactal artesano",
    kcal: 80,
    proteinas: 3.4,
    grasas: 0.6
}
console.log(pan1.nombre);
console.log(pan1.kcal);
console.log(pan1.proteinas);
console.log(pan1.grasas);


class panificados {
    constructor(pan, kcal, proteinas, grasas) {
        this.pan = pan
        this.kcal = kcal
        this.proteinas = proteinas;
        this.grasas = grasas;

    }
    mostrar() {
        console.log("1 rodaja de " + this.pan + " tiene " + this.kcal + " kcal " + this.proteinas + " proteinas y " + this.grasas + " grasas");
    }

}
const pan2 = new panificados("pan lactal bimbo", 90, 3.6, 0.8);
const pan3 = new panificados("pan pancho bimbo", 110, 3.2, 1.2);
pan2.mostrar();
pan3.mostrar();

*/