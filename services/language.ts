export const analize = (text: string) => {
    const def = new RegExp(/(def)\s+\w+\s*(=)\s*(\()\s*[\w]+[,\s*\w+]*(\))\s*(=>)\s*\w+(\()(`?'?"?)[^(${)]*[(\$\{)?\w+(\})]*[^(${)]*[(\$\{)?\w+(\})]*\`/gm);
    const simpleComments = new RegExp('[\/]{2}\s*.+');

    const multiLineComments = new RegExp('[\/]{2}\s*.+');
    const strings = new RegExp('[\'"].+[\'"]');
    const numbers = new RegExp('[0-9]+');


    const results = {
        errors: [],
        warnings: [],
        textProcessed: text,
    };

    return {
        errors: [],
        warnings: [],
        textProcessed: text,
    }
};