export declare function union<T>(source: T[], items: T[], filter?: (a: T, b: T) => boolean): T[];
export declare function difference<T>(source: T[], items: T[], filter?: (a: T, b: T) => boolean): T[];
export declare function toArr<T>(items: T | T[]): T[];
export declare function emptyArr(arr: any[]): boolean;
