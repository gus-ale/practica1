
function cuentaPalabras(texto){
    const palabras = texto.split(" ");
    var counter = 0;
    for(let i=0 ; i < palabras.length ; i++){
        let palabra = palabras[i];
        if(palabra[0] == 'a'){
            counter ++;
        }
    }
    return {
        cantidadDePalabras : palabras.length,
        palabrasConA : counter
    };

}
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    console.log("testCuentaPalabras fallo");
  }
}

function main() {
  testCuentaPalabras();
}

main();