export const analize = (text: string) => {
    const defArrowFunction = new RegExp(/(def)\s+\w+\s*(=)\s*(\()\s*[\w]+[\,\s*\w+]*(\))\s*(=>)\s*\w+(\(\s*)(`?'?"?)([^`(${)]*[\$\{\w+\}]*)*(`?'?"?)(\s*\n*\)\s*\;)/gm);

    const simpleClassFunction = new RegExp(/\w+\s*(\(\s*)\w+(\,\s*[a-zA-Z0-9]+)*(\s*\)\s*)\s*\{([^\}]\s*.*\s*)*\}/gm);

    const strings = new RegExp('[\'"].+[\'"]');
    const numbers = new RegExp('[0-9]+');
    const booleans = new RegExp('(true|false)');
    const variables = new RegExp('[a-zA-Z]+[a-zA-Z0-9]*');


    const simpleComments = new RegExp(/\/{2}.*/gm);
    const multiLineComments = new RegExp(/\/\*[\s\S]*\*\//gm);

    const multipleSpaces = new RegExp(/\s{2,}/gm);
    //
    const lines = text.replace(multiLineComments, '') // remove multiline comments
        .replace(simpleComments, '') // remove simple comments
        .split('\n') // split text into lines
        .map((line, index) => {
            line = line.replace(multipleSpaces, ' ') // remove multiple spaces
                .replace('; ', ';') // remove space before semicolon
            return line;
        });
    console.log(lines);


    let textProcessed = '';
    for (let i = 0; i < lines.length; i++) {
        textProcessed += lines[i];
    }
    defArrowFunction.test(textProcessed) && console.log('defArrowFunction', textProcessed.match(defArrowFunction));
    textProcessed
    const results = {
        errors: [],
        warnings: [],
        textProcessed: lines.toString(),
    };

    return {
        errors: [],
        warnings: [],
        textProcessed: textProcessed,
    }
};