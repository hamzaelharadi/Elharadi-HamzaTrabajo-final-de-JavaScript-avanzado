
// incorporar  galería dinámica con jQuery pajina Galeria.html


// INCIO DE CODE DE PAJINA GALERRY CON JQUERY

$(document).ready(function () {

    // Array de imágenes (puedes añadir tantas como quieras)
    const images = [
        "/Elharadi-HamzaTrabajo-final-de-JavaScript-avanzado/assets/images/categoryvisual.png",
        "/Elharadi-HamzaTrabajo-final-de-JavaScript-avanzado/assets/images/categoryvisual.png",
        "/Elharadi-HamzaTrabajo-final-de-JavaScript-avanzado/assets/images/collection1.png",
        "/Elharadi-HamzaTrabajo-final-de-JavaScript-avanzado/assets/images/collection2.png",
        "/Elharadi-HamzaTrabajo-final-de-JavaScript-avanzado/assets/images/collection3.png",
        "/Elharadi-HamzaTrabajo-final-de-JavaScript-avanzado/assets/images/collection4.png"
    ];

    // Generar galería dinámicamente
    images.forEach(src => {
        $("#gallery").append(`<img src="${src}" alt="foto">`);
    });

    // Lightbox
    $("#gallery").on("click", "img", function () {
        $("#lightbox-img").attr("src", $(this).attr("src"));
        $("#lightbox").fadeIn();
    });

    $(".close, #lightbox").on("click", function (e) {
        if (e.target !== this) return;
        $("#lightbox").fadeOut();
    });

});

