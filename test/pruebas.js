// inicio del programa
startExec
// zona de variables
startDef
/* 
comentarios multiples
*/
    def num1;
    def ñum2;
    def imprimir = (op, res) => clog(`El resultado de la operacion ${op} es: ${res}`);
endDef
startBody
// zona de codigo
suma = (num1, num2) => (num1 + num2);

resta = (num1, num2) => num1 - num2;

division = (num1, num2) => num2 === 0 ? (new Error('No existe la divicion entre cero'), 'N/A') : num1 / num2;
@
multiplicacion = (num1, num2) => num1 * num2;



potencia = (num1, num2) => num1 ** num2;

raiz = (num1, num2) => num1 ** 1 / num2;

modulo = (num1, num2) => num1 % num2;

clog(suma(1, 2)); // 3
clog(resta(1, 2)); // -1
clog(division(1, 2)); // 0.5
clog(multiplicacion(1, 2)); // 2
clog(potencia(2, 3)); // 8
clog(raiz(8, 3)); // 2
clog(modulo(8, 3)); // 2


imprimir('suma', suma(1, 2));
imprimir('resta', resta(1, 2));
imprimir('divicion', division(1, 2));
imprimir('multiplicacion', multiplicacion(1, 2));
imprimir('potencia', potencia(2, 3));
imprimir('raiz', raiz(8, 3));
imprimir('modulo', modulo(8, 3));

endExec