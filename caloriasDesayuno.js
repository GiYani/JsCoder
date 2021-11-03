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
    swal("Tu informacion se  ha guardado, te escribiremos al correo que nos enviaste")

}
document.getElementById("btn").addEventListener("click", () => {
    guardarDatos()
    evento()
})


$('.theme').click(function() {
    if ($('input.theme').is(':checked')) {
        $('.tema').attr('href', 'dark.css')

    } else {
        $('.tema').attr('href', 'light.css')
    }

})

const btnS = document.querySelector('.theme')
btnS.addEventListener('click', () => {
    document.body.classList.toggle('dark');



    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true')
    } else {
        localStorage.setItem('dark-mode', 'false')
    }
});


if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}