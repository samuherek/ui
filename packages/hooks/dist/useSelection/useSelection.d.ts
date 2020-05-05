export declare type CompareFn<T> = (a: T, b: T) => boolean;
export declare type Options<T> = {
    initialSelected?: T[];
    compareFn?: CompareFn<T>;
};
export declare type State<T> = {
    selected: T[];
    initialSelected: T[];
    compareFn: CompareFn<T>;
};
declare function useSelection<T>({ initialSelected, compareFn, }?: Options<T>): {
    add: (adding: T | T[]) => void;
    remove: (removing: T | T[]) => void;
    reset: () => void;
    touched: boolean;
    selected: T[];
    initialSelected: T[];
    compareFn: CompareFn<T>;
};
export { useSelection };
