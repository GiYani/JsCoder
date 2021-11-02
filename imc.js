//
//
//
//
const imc = () => {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    let resultado = Number(peso / (altura * altura))
    console.log(resultado)


    if (resultado <= 18.5) {
        swal(`Su IMC es ${resultado} tiene un indice BAJO, consulte a su médico`);
    } else if (resultado >= 18.6 && resultado <= 25) {
        swal(`Su IMC es ${resultado}, es NORMAL`);
    } else if (resultado >= 25.1 && resultado <= 29.9) {
        swal(`Su IMC es ${resultado} usted tiene SOBREPESO, consulte a su médico`);
    } else {
        swal(`Su IMC es ${resultado} tiene indice OBESO, consulte a su médico`);
    }

}


document.getElementById("btn").addEventListener("click", () => {
    imc()

})

const darkM = () => {
    $("body").css("background-color", "black")
    $("h3").css("color", "white")
    $("p").css("color", "white")
    $("a").css("color", "white")

    localStorage.setItem("modeLB", "dark")
}
const lightM = () => {
    $("body").css("background-color", "white")
    $("h3").css("color", "black")
    $("p").css("color", "black")
    $("a").css("color", "black")

    localStorage.setItem("modeLB", "light")
}

$("#modeLB").on("click", () => {
    if (localStorage.getItem("modeLB") === "dark") {
        lightM()
    } else {
        darkM()
    }

})