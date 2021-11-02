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
const darkM = () => {
    $("body").css("background-color", "black")
    $("h3").css("color", "white")
    $("p").css("color", "white")
    $("a").css("color", "white")
    $("#cambio2").replaceWith('<img id="cambio2" src="imagenes/fruitBlanco.png" alt= "imagen frutas blanca" class=" m-auto ">')
    $("#cambio3").replaceWith('<img id="cambio3" src="imagenes/peso.png" alt= "imagen balanza blanca" class=" m-auto ">');

    localStorage.setItem("modeLB", "dark")
}
const lightM = () => {
    $("body").css("background-color", "white")
    $("h3").css("color", "black")
    $("p").css("color", "black")
    $("a").css("color", "black")
    $("#cambio2").replaceWith('<img id="cambio2" src="imagenes/fruits.png" alt= "imagen frutas negra" class=" m-auto ">')
    $("#cambio3").replaceWith('<img id="cambio3" src="imagenes/peso.png" alt= "imagen balanza negra" class=" m-auto ">');

    localStorage.setItem("modeLB", "light")
}

$("#modeLB").on("click", () => {
    if (localStorage.getItem("modeLB") === "dark") {
        lightM()
    } else {
        darkM()
    }

})