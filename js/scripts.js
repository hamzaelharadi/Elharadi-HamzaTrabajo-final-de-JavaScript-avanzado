// incorporar archivo Xml en la pajina index.html

// funtion de cargar fichier XML son datos de section de Articolos
function cargarArticolos(){

    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            mostrarArticolos(this);
        }
    }



    request.open('GET' , 'data/articolosinfo.xml' , true);
    request.send();


}


// function de mostrar info 
function mostrarArticolos(elem){
    // creamos una varaible donde almacenamos response
    let archivo = elem.responseXML;


    // llamamos a los elementos que hay en archivo XML
    let marca = archivo.getElementsByTagName('marca');
    let description = archivo.getElementsByTagName('description');
    let precio = archivo.getElementsByTagName('precio');
    let categoria = archivo.getElementsByTagName('categoria');
    let collection = archivo.getElementsByTagName('collection');

    
    
    //   //limpiamos 
    //     document.getElementById('nombre').innerHTML = "";
    //     document.getElementById('description').innerHTML ="";
    //     document.getElementById('precio').innerHTML = "";

            let nombre = document.getElementById('articolos').querySelectorAll('.nombre');
             let elementParafo = document.getElementById('articolos').querySelectorAll('.description');   
             let elementh4 =   document.getElementById('articolos').querySelectorAll('.eee');

             let categoriaclassH4 = document.getElementById('top-Category').querySelectorAll('.java');
             let collectionselect = document.getElementById('top-contenidor').querySelectorAll('.collecion');

        

            loops(nombre,marca);
            loops(elementParafo,description);  
            loops(elementh4,precio);

            loops(categoriaclassH4,categoria);
            loops(collectionselect,collection);
            




            
       

    
      
  
  
       
}

cargarArticolos();

function loops(elemdiv, tagxml){
   for(let i = 0 ; i<tagxml.length ; i++){
        
            elemdiv[i].textContent = tagxml[i].textContent;

     }
}






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



