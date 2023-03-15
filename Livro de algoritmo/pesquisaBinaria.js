function pesquisaBinaria(lista,item) {
let baixo = 0;
let alto = lista.length - 1;
   
while (baixo <= alto){
    const meio = Math.floor((baixo + alto)/2);
    const adivinha =  lista[meio];


    if (adivinha === item){
        return meio;

    }else if (adivinha > item){
       
        alto = meio - 1;
        
     } else {

        baixo = meio + 1;
    }    
    }
    return null;
}

const minhaLista = [1,3,5,7,9]

console.log (pesquisaBinaria(minhaLista,9));
console.log (pesquisaBinaria(minhaLista, -1));