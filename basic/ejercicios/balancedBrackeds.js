// Complete the isBalanced function below.
function isBalanced(cadena) {
function isBalanced(s) {
    // 
    let aux = -1;

    let apertura = ['(', '{', '['];
    let cierre = [')', '}', ']'];
    while (s.length != 0) {
        aux = s.length;

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

        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","");

        if(aux == s.length) return "NO";
    }

    return "YES";
}
    

// TESTS
console.log('hola mundo');
console.log(isBalanced('{[') == 'NO');
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');

// TIPS: Pilas
// TIPS: remplazo de cadenas