/* eslint-disable prettier/prettier */
// NOTE: need to fix prettier for this file

// @flow
// Declaring A Global Function
declare var PI: number;
// Declaring A Global Variable
declare function foo(a: number): string;
// Declaring A Global Type
declare type UserID = number;
// Declaring A Module
declare module 'some-third-party-library' {
  // This is where we'll list the module's exported interface(s)
}

// ************Declaring An ES Module****************
// 1) Named Exports
declare module 'some-es-module0' {
  // Defines the type of a Path class within this `declare module` body, but
  // does not export it. It can only be referenced by other things inside the
  // body of this `declare module`
  declare class Path {
    toString(): string;
  }

  // Declares a named "concatPath" export which returns an instance of the
  // `Path` class (defined above)
  declare export function concatPath(dirA: string, dirB: string): Path;
}
// 2) Default Exports
declare module 'some-es-module1' {
  declare class URL {
    constructor(urlStr: string): URL;
    toString(): string;

    static compare(url1: URL, url2: URL): boolean;
  }

  // Declares a default export whose type is `typeof URL`
  declare export default typeof URL;
}
// ==================== Declaring A CommonJS Module ==================
declare module 'some-commonjs-module0' {
  // Defines the type of a Path class within this `declare module` body, but
  // does not export it. It can only be referenced by other things inside the
  // body of this `declare module`
  declare class Path {
    toString(): string;
    getDir(): string;
  }

  // The "concatPath" function now returns an instance of the `Path` class
  // (defined above).
  declare module.exports: {
    concatPath(dirA: string, dirB: string): Path
  };
}

declare module 'some-commonjs-module1' {
  // The export of this module is an object with a "concatPath" method
  declare module.exports: {
    concatPath(dirA: string, dirB: string): string
  };
}
