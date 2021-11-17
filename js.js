// DARK MODE//
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