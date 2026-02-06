// incorporar archivo Xml en la pajina index.html

// funtion de cargar fichier XML son datos de section de Articolos
function cargarArticolos(){

    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            mostrarArticolos(this);
        }
    }



    request.open('GET' , 'data/noticias.xml' , true);
    request.send();


}


// function de mostrar info 
function mostrarArticolos(elem){
    // creamos una varaible donde almacenamos response
    let archivo = elem.responseXML;
     

    // llamamos a los elementos que hay en archivo XML
    let titlexml = archivo.getElementsByTagName('titulo');
    let descriptionxml = archivo.getElementsByTagName('description');
    let fechaxml = archivo.getElementsByTagName('fecha');


    // llamamos a los elemontos de section noticias
    let title = document.getElementById('titulo')
    let parragrafo = document.getElementById('parragrafo');
    let fecha = document.getElementById('fecha');
    
 

       for(let i = 0 ; i<titlexml.length ; i++){
                // loop += "ciudad: <strong>" + nombre[i].childNodes[0].nodeValue + "</strong> <br>" ;

            title[i] = titlexml[i].textContent;
            parragrafo[i] = descriptionxml[i].textContent;
            fecha[i] = fechaxml[i].textContent;


     }


 
            




            
       

    
      
  
  
       
}

cargarArticolos();






