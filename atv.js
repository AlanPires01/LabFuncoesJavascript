/*8) Escreva um programa JavaScript para remover itens duplicados de um
array (ignore a diferenciação entre maiúsculas e minúsculas).*/


function removeDuplicado(entrada) {
    var aux = {};
    var saida = [];
    let duplicado = []
    for (let i = 0; i < entrada.length; i++) {

        for (let j = 0; j < entrada.length; j++) {

            if (i != j) {
                if (entrada[i] === entrada[j]) {
                    if (!duplicado[i]) {
                        duplicado[i] = true;
                        duplicado[j] = true;
                        saida.push(entrada[i]);
                        break;
                    }


                }


            }
        }
        if (!duplicado[i]) {
            saida.push(entrada[i]);
        }
    }
    return saida;
}

let a = ['alan', 'alana', 'alan', 'alisson'];
let b = removeDuplicado(a);
console.log(b);