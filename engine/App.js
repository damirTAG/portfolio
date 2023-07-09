/*
DO NOT EDIT, SCRIPTS FOR https://damirtag.netlify.app/
НЕ ИЗМЕНЯТЬ, СКРИПТЫ ДЛЯ https://damirtag.netlify.app/

*/
/*youtube background player start*/

/*youtube background player end*/
$.getJSON("https://api.ipify.org?format=json", function (data) {
    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
});

let author = "DAMIRTAG'S PORTFOLIO, ";
let github = "GITHUB REPO: HTTPS://GITHUB.COM/DAMIRTAG/PORTFOLIO";
console.log(author + github);
//swiper.js begin
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//swiper.js end
//slowscroll begin
function slowScroll(id) {
    var offset = 0;
    $("html, body").animate(
        {
            scrollTop: $(id).offset().top - offset,
        },
        500
    );
    return false;
}
//slowscroll end
//см. подробнее
function displayText1() {
    var text = document.getElementById("hiddshow1");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
// ---------
