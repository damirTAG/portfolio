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
// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
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
//PHONE NUMBER SKELET START
document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== "false" && e.type === "blur") {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = "";
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
    };
    var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
    for (let elem of phone_inputs) {
        for (let ev of ["input", "blur", "focus"]) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
//PHONE NUM SKELET END
//alert success jquery
$(document).ready(function () {
    $("form").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "https://formsubmit.co/8b33eca9175fd2ddb1c8130375e39149", //Changed
            data: th.serialize(),
        }).done(function () {
            alert("Успешно!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 300);
        });
        return false;
    });
});
//alert end
