class panificados {
    constructor(pan, kcal, proteinas, grasas) {
        this.pan = pan
        this.kcal = kcal
        this.proteinas = proteinas;
        this.grasas = grasas;
    }
}


let listaPanificados = [];

listaPanificados.push(new panificados("lactal ", 90, 3.6, 0.8))
listaPanificados.push(new panificados("pancho ", 110, 3.2, 1.2))
listaPanificados.push(new panificados("hamburguesa", 125, 5.4, 0.8))
listaPanificados.push(new panificados("salvado", 114, 5.0, 14))
listaPanificados.push(new panificados("mix semillas", 85, 5.4, 5.5))



const agregarPanificados = () => {

    let pan = prompt("nombre");
    let kcal = Number(prompt("calorias"));
    let proteinas = Number(prompt("gramos Proteinas"));
    let grasas = Number(prompt("gramos Grasas"));

    let producto = new panificados(pan, kcal, proteinas, grasas)
    listaPanificados.push(producto)
}

listaPanificados.sort((a, b) => {
    if (a.pan > b.pan) {
        return 1
    }
    if (a.pan < b.pan) {
        return -1
    }
    return 0
})
console.log(listaPanificados)


// dark mode//

$('#Body').toggleClass(localStorage.toggled);

function darkLight() {

    if (localStorage.toggled != 'dark') {
        $('#Body ').toggleClass('dark', true);
        $('.tema').attr('href', 'dark.css');
        localStorage.toggled = "dark";

    } else {
        $('#Body').toggleClass('dark', false);
        $('.tema').attr('href', 'light.css');
        localStorage.toggled = "";
    }
}


if ($('Body').hasClass('dark')) {
    $('#checkBox').prop("checked", true)
    $('.tema').attr('href', 'dark.css')
} else {
    $('#checkBox').prop("checked", false)
}