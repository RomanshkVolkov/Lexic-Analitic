
//obtener palabras reservadas

export const supportedCharacters = new RegExp(/\w|\s|\(|\)|\{|\}|\[|\]|\.|\,|\;|\:|\+|\-|\*|\/|\=|\>|\<|\!|\&|\||\?|\||\'|\`|\"|\%|\$/gm);

export function isIdentificator(value: any) {
    return false;
}

export function getReservedWord(key: any) {
    var array: any = {
        'alias': 'mo',
        'break': 'me',
        'case': 'mo',
        'def': 'mo',
        'class': 'mo',
        'do': 'mo',
        'else': 'mo',
        'elsif': 'mo',
        'end': 'mo',
        'ensure': 'mo',
        'false': 'mo',
        'true': 'mo',
        'for': 'mo',
        'if': 'mo',
        'in': 'mo',
        'modulo': 'mo',
        'next': 'mo',
        'nil': 'mo',
        // 'not': 'mo',
        // 'or': 'mo',
        'redo': 'mo',
        'rescue': 'mo',
        'retry': 'mo',
        'return': 'mo',
        'self': 'mo',
        'super': 'mo',
        'then': 'mo',
        'undef': 'mo',
        'unless': 'mo',
        'until': 'mo',
        'when': 'mo',
        'while': 'mo',
        'yield': 'mo',
        '_FILE': 'mo',
        '_LINE_': 'mo',
        'public': 'mo',
        'private': 'mo',
        'protected': 'mo',
        'begin': 'mo',
        'try': 'mo',
        'catch': 'mo',
        'finally': 'mo',
        'raiz': 'mo',
        'power': 'mo',
        //Operadores lógicos
        'and': 'ol',
        'or': 'ol',
        'not': 'ol',
        '&&': 'ol',
        '||': 'ol',

        //Operadores Aritmeticos

        //Operadores modificador
        'string': 'td',
        'int': 'td',
        'char': 'td',
        'float': 'td',
        'decimal': 'td',
        'double': 'td',
        'date': 'td',
        'datetime': 'td',
        'byte': 'td',
        'boolean': 'td',

    };
    return array[key];
}

export function getType(key: any) {
    var array: any = {
        'ol': 'operador lógico',
        'oa': 'operador aritmético',
        'mo': 'modificador',
        'me': 'método',
        'td': 'tipo de dato'
    };
    return array[key];
}

//Obtener elementos léxicos
//

export function getElement(key: any) {
    var array: any = {
        '=': 'igual',
        "'": 'comilla simple',
        '.': 'punto',
        ',': 'coma',
        ';': 'punto y coma',
        // ':': 'dos puntos',
        '[': 'abrir corchete',
        ']': 'cerrar corchete',
        '{': 'abrir llave',
        '}': 'cerrar llave',
        '(': 'abrir parentesis',
        ')': 'cerrar paretensis',
        '_': 'guion bajo',
        '+': 'oa',
        '-': 'oa',
        '*': 'oa',
        '/': 'oa',
        '>': 'oa',
        '<': 'oa',

        /*'/':'Operador division',
        "\":'comentarios',*/
        '@': 'Arroba',

        '?': 'oa',
        '!': 'oa',
        '%': 'oa',
        '&': 'oa',
        '|': 'oa',
        '#': 'oa',

        ':': 'oa',
        '^': 'oa',
        'ç': 'oa',
        '==': 'oa',
        '*=': 'oa',
        '/=': 'oa',
        '-=': 'oa',
        '+=': 'oa',
        '!!': 'oa',
        '>>': 'oa',
        '<<': 'oa',
        '::*': 'oa',
        '@@': 'oa',
        '\n': 'oa',
        '\r': 'oa',




    };
    return array[key];
}

