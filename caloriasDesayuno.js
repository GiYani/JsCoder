class Comida {

    constructor({
        hidratos,
        frutas,
        infusion,
        correo,

    }) {

        this.hidratos = hidratos;
        this.frutas = frutas;
        this.infusion = infusion;
        this.correo = correo;
    }

}

let clientes = []
const listadoDesayunos = () => {
    const desayuno = new Comida({

        hidratos: document.getElementById("hidratos").value,
        frutas: document.getElementById("frutas").value,
        infusion: document.getElementById("infusion").value,
        correo: document.getElementById("correo").value,
    })

    let listaPersonas;
    if (localStorage.getItem("clientes") != null) {
        listaPersonas = JSON.parse(localStorage.getItem("clientes"))
        listaPersonas.push(desayuno)
        localStorage.setItem("clientes", JSON.stringify(listaPersonas))
    }
    clientes.push(desayuno)

    return desayuno
}


const guardarDatos = () => {

    listadoDesayunos()

    if (verificarStorage() != undefined) {
        localStorage.setItem("clientes", JSON.stringify(verificarStorage()))
    } else {
        localStorage.setItem("clientes", JSON.stringify(clientes))
    }
}

const verificarStorage = () => {
    let dato = [];
    if (localStorage.getItem("clientes") != null) {
        dato = JSON.parse(localStorage.getItem("clientes"))
        return dato
    }
}

const evento = () => {
    if (correo.value === null || correo.value === '') {
        swal("Ingrese su correo")


    } else {
        swal("Tu informacion se  ha guardado, te escribiremos al correo que nos proporcionaste")
        guardarDatos()
    }
}


document.getElementById("btn").addEventListener("click", () => {

    evento()

})


// dark mode//
$("#Body").toggleClass(localStorage.darkmode);

function darkLight() {

    if (localStorage.darkmode != "dark") {
        $("#Body").toggleClass("dark", true);
        $(".tema").attr("href", "dark.css");
        localStorage.darkmode = "dark";

    } else {
        $("#Body").toggleClass("dark", false);
        $(".tema").attr("href", "light.css");
        localStorage.darkmode = "";
    }
}


if ($('Body').hasClass('dark')) {
    $('#checkBox').prop("checked", true)
    $('.tema').attr('href', 'dark.css')
} else {
    $('#checkBox').prop("checked", false)
}