/*$('.theme').on("click", () => {
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



$('.theme').on("click", () => {
    if ($('input.theme').is(':checked')) {
        $('.tema').attr('href', 'dark.css')

    } else {
        $('.tema').attr('href', 'light.css')
    }

})
/*/

// DARK MODE//
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