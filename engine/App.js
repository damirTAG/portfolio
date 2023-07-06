/* Add "https://api.ipify.org?format=json" statement
               this will communicate with the ipify servers in
               order to retrieve the IP address $.getJSON will
               load JSON-encoded data from the server using a
               GET HTTP request */

$.getJSON("https://api.ipify.org?format=json", function (data) {
    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
});

let author = "DAMIRTAG'S PORTFOLIO, ";
let github = "GITHUB REPO: HTTPS://GITHUB.COM/DAMIRTAG/PORTFOLIO";
console.log(author + github);

var arrLang = {
    "en-gb": {
        me: "Я — Веб Разработчик",
        devfor: "Разработаю для Вас сайт",
        status: "Статус разработки",
        techs: "Технологии которые я использую",
        design: "Дизайн",
    },
    "zh-tw": {
        me: "I am — Web Developer",
        devfor: "Turnkey website development",
        status: "Development status",
        techs: "Technologies I Use",
        design: "Design",
    },
};

$(document).ready(function () {
    // The default language is English
    var lang = "en-gb";
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// get/set the selected language
$(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});
