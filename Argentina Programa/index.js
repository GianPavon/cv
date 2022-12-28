
//funcion que muestra el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav")
    if(x.className==""){
        x.className="responsive"
    }else{
        x=className=""
    }
}
// funcion estilo del menu
function seleccionar(link){
    var opciones= document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    
    //hacer desaparecer el menu modo responsive

    var x= document.getElementsById("nav")
     x.className="";
}