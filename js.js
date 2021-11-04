$('.theme').on("click", () => {
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
};