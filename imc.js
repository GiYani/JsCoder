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