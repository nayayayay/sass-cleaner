declare module 'sass-cleaner' {
  export const version: string;

  export class Parser {
    constructor();
    public parse(content: string): string;
  }

  export class Tokeniser {
    constructor();
    public tokenise(content: string): Array<string>;
    public static tokens(): {
      COMMENT: 0,
      SELECTOR: 1
    };
  }

  export class Normaliser {
    constructor();
    public normalise(tokenList: Array<string>): string;
  }

  export function clean(content: string|string[]): string|string[];
}
