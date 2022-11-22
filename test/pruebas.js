export class Operaciones {
    def num1;
    def num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    suma = (num1, num2) => (num1 + num2, 'suma');

    resta(num1, num2) {
        return (num1 - num2, 'resta');
    }

    division = (num1, num2) => num2 === 0 ? (new Error('No existe la divicion entre cero'), 'N/A') : (num1 / num2, 'division');

    multiplicacion(num1, num2) => (num1 * num2, 'multiplicacion');

}

clog(Operaciones.suma(1, 2)); // 3
clog(Operaciones.resta(1, 2)); // -1
clog(Operaciones.division(1, 2)); // 0.5
clog(Operaciones.multiplicacion(1, 2)); // 2


export class operadores extends Operaciones {
    constructor(num1, num2) {
        super(num1, num2);
    }

    potencia = (num1, num2) => (num1 ** num2, 'potencia');

    raiz = (num1, num2) => (num1 ** (1 / num2), 'raiz');

    modulo = (num1, num2) => (num1 % num2, 'modulo');
}

clog(operadores.potencia(2, 3)); // 8
clog(operadores.raiz(8, 3)); // 2
clog(operadores.modulo(8, 3)); // 2

def imprimir = (op, res) => clog(`El resultado de la operacion ${op} es: ${res}`);

def op = new operadores(1, 2);
imprimir(op.suma);
imprimir(op.resta);
imprimir(op.division);
imprimir(op.multiplicacion);
imprimir(op.potencia);
imprimir(op.raiz);
imprimir(op.modulo);

