
function textosCortos(textsCollection){
    const respuesta = [];
    var counter = 0;
    
    for(let index = 0 ; index < textsCollection.length ; index ++){
        const obj = textsCollection[index];
        if(obj.texto.split(" ").length <= 10){
            const titulo = obj.titulo;
            respuesta[counter] = obj;
            const tituloTrimeado = titulo.trim();
            const primerCaracter = tituloTrimeado.charAt(0);
            const restoDeCaracteres = tituloTrimeado.slice(1);
            const primerCaracterMayuscula = primerCaracter.toUpperCase();
            respuesta[counter].titulo = primerCaracterMayuscula + restoDeCaracteres; 
            counter ++;
        }
    }
   
    return respuesta ;
}



function testTextosCortos() {
    const textosDePrueba = [
      { titulo: " un titulo ", 
        texto: "uno dos tres cuatro cinco" },
      {
        titulo: " un titulo ",
        texto: "uno dos tres cuatro cinco seis siete ocho nueve diez once",
      },
    ];
    const respuesta = textosCortos(textosDePrueba);
  
    if (respuesta.length == 1 && respuesta[0].titulo == "Un titulo") {
      console.log("testTextosCortos passed");
    } else {
      throw "testTextosCortos failed";
    }
  }
  
  function main() {
    testTextosCortos();
  }
  
  main();