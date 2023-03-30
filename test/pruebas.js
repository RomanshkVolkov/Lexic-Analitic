init // inicio del programa
    vars // zona de variables
        Num num = 10 // declaracion de una variable numerica
        String txt = 'El numero 1 es: ' // declaracion de una cadena de texto
        Num num2 = 5 // declaracion de una variable numerica
        String txt1 = 'El numero 2 es: ' // declaracion de una cadena de texto
        String txt2 = 'La suma de los numeros es: ' // declaracion de una cadena de texto
        String saludo = 'Hola mundo' // declaracion de una cadena de texto
        String numMayor5 = 'El numero es mayor a 5'
        String forExample = 'este es un for'
    body // cuerpo del programa
/*
El programa funciona con identacion como en phyton y se entiende que el cierre de la etiqueta vars
es el inicio del body el programa elimina los comentarios simples y multiples antes de analizar la sintaxis
y que las variables esten definidas si una variable debe estar declarada en la zona de variables para poder
usarla y se debe inicializar antes de su uso por una asignacion de valor nombre = 'valor'
 */
        log(txt, num) // console.log() -> El numero 1 es: 10
        log(txt1, num2) // console.log() -> El numero 2 es: 5
        log(txt, num + num2) // console.log() -> La suma de los numeros es: 15
        if (num > 5) {
            log(numMayor5)
        }
        rpt {
            log(forExample)
        }


end // final del programa


