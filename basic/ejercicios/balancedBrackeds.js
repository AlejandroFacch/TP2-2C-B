// Complete the isBalanced function below.
function isBalanced(cadena) {

    let apertura = ['(', '{', '['];
    let cierre = [')', '}', ']'];

    let balanceada = 'YES';
		let aux = [];
		let index = 0;
		while (index < cadena.length && balanceada == true) {
			let caracter = cadena[index];
			if (esSimbolo(caracter, apertura)) {
				aux.push(caracter);
			} else if (esSimbolo(caracter, cierre)) {
				if (aux.length == 0) {
					balanceada = 'NO';
				} else {
					let anterior = aux.pop();
					if (!validarCierre(caracter, anterior)) {
						balanceada = 'NO';
					}
				}
			}
			index++;

		}
		if (balanceada && aux.length != 0) {
			balanceada = 'NO';
		}

        return balanceada;


        function esSimbolo(char, simbolos) {
		
            let resultado = false;
            let index = 0;
            while(resultado == false && index < simbolos.length) {
                if(char == simbolos[index]) {
                    resultado = true;
                }else {
                    index++;
                }
            }
            
            return resultado;
        }

        function validarCierre(simbolo, ant) {
           let aux = false;
            switch (simbolo) {
    
            case '}':
                if (ant == '{') {
                    aux = true;
                }
                break;
    
            case ']':
                if (ant == '[') {
                    aux = true;
                }
                break;
    
            case ')':
                if (ant == '(') {
                    aux = true;
                }
                break;
            }
            return aux;
        }

}
    

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
