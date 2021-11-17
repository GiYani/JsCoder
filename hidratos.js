class panificados {
    constructor(pan, kcal, proteinas, grasas) {
        this.pan = pan
        this.kcal = kcal
        this.proteinas = proteinas;
        this.grasas = grasas;
    }
}


let listaPanificados = [];

listaPanificados.push(new panificados("pan lactal", 90, 3.6, 0.8))
listaPanificados.push(new panificados("pan de pancho", 110, 3.2, 1.2))
listaPanificados.push(new panificados("pan de hamburguesa", 125, 5.4, 0.8))
listaPanificados.push(new panificados("pan de salvado", 114, 5.0, 14))
listaPanificados.push(new panificados("pan mix de semillas", 85, 5.4, 5.5))


localStorage.setItem("panes", JSON.stringify(listaPanificados))

const BusquedaP = () => {

    let datoPan = document.getElementById("busqueda").value;

    let PanesJ = JSON.parse(localStorage.getItem("panes"))

    const busquedaPan = PanesJ.find(obj => obj.pan === datoPan);
    console.log(busquedaPan);

    if (busquedaPan == null) {
        swal("No se registra lo solicitado");

    } else {
        swal("1 rodaja de " + busquedaPan.pan + " contiene " + busquedaPan.kcal + " kcal , " + busquedaPan.proteinas + " gr proteinas y " + busquedaPan.grasas + " gr de grasas.");
    }


}

document.getElementById("btn").addEventListener("click", () => {
    BusquedaP()
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