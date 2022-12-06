import { IErrors } from "../interfaces/messages"
export const mErrors: any = {
    suportedCharacters: { error: '', message: `character is not a valid character`, description: 'Valid characters: a-z, A-Z, 0-9, (, ), {, }, [, ], ., ,, ;, :, +, -, *, /, =, >, <, !, &, |, ?, `, ", %, $', line: 0, column: 0 },
    startProgram: { error: 'startExec', message: `is missing and required at program startup`, description: 'startExec is missing', line: '?', column: '?' },
    endProgram: { error: 'endExec', message: `is missing and required at program end`, description: 'endExec is missing', line: '?', column: '?' },
    startDef: { error: 'startDef', message: `is missing and required after starting program "startExec"`, description: 'startDef is missing', line: '?', column: '?' },
    endDef: { error: 'endDef', message: `is missing and is required at the end of the variable area`, description: 'endDef is missing', line: '?', column: '?' },
    startBody: { error: 'startBody', message: `is missing and required at the start of the code zone`, description: 'startBody is missing', line: '?', column: '?' },
}