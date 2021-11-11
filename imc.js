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

//dark mode//

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