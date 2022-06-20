
function devuelvePar(collection){
    const resultado = [];
    for(let index = 0 ; index < collection.length ; index ++){
        const element = collection[index];
        if(element.numero % 2 == 0){
            resultado.push(element);
        }
    }
    return resultado;
}


function main(){
    const listaDeObjetos = [];
    for(let index = 0 ; index < 20 ; index ++){
        const numero = Math.ceil(Math.random()*80);
        listaDeObjetos.push({
            numero : numero,
            palabra : "palabra  : " + numero
        });
    }
    const soloPares = devuelvePar(listaDeObjetos);
    console.log(soloPares);
}
main();