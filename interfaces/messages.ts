export interface IErrors {
    error: string;
    message: string;
    description: string;
    line: number | string;
    column: number | string;
}

export interface IWarnings {
    message: string;
    line: number;
    description: string;
}