declare module 'sass-cleaner' {
  export const version: string;

  export type Token = {
    key: string,
    value: string
  }

  export const tokenTable: Array<Token>;

  export class Parser {
    constructor();
    public parse(content: string): string;
  }

  export class Tokeniser {
    constructor();
    public tokenize(content: string): Array<Token>;
  }

  export class Normaliser {
    constructor();
    public normalize(tokenList: Array<Token>): string;
  }

  export function clean(content: string|string[]): string|string[];
}
