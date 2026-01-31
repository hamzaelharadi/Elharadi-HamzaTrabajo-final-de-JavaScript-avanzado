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







