// TODO:
// We need to test whether it's a good idea to store these values
// in plain arrays and loop over so many times when adding or removing.
// A better option might be using "Map" or an object which allows for
// easy access and removal.
// The test should also include check if the render method is okay with
// using Object.key(obj).map(...) in case of using objects.
// For the time being, we don't care since we never really store more than
// 20-30 (max) of these selections at onces.

// Comment:
// This is used for combining two arrays of elements of the same
// type into an array without duplicates. This function is
// used when we need to keep a reference to a selection of items
// mostly found in "context".
// The reason for accepting a "filter" function is so we can
// compare the values without any set rules. We want to compare
// campaigns as well as kpis which have different comparison functions.
export function union<T>(
  source: T[],
  items: T[],
  filter?: (a: T, b: T) => boolean
): T[] {
  const filterFn =
    typeof filter === 'function' ? filter : (a: any, b: any) => a === b;

  return items.reduce(
    (prev, next) => {
      if (!prev.some(p => filterFn(p, next))) {
        prev.push(next);
      }
      return prev;
    },
    [...source]
  );
}

// Comment:
// This is used for creating a difference array of elements of the same
// type into an array without duplicates. This function is similar to
// "union" helper. In this case, we are removing an item from
// the reference array which is usually stored in "context" for alter
// use. The reason for accepting "filter" function is so we can
// compare the values without any set rules. We want to compare
// campaigns as well as kpis which have different comparison functions.
export function difference<T>(
  source: T[],
  items: T[],
  filter?: (a: T, b: T) => boolean
): T[] {
  const filterFn =
    typeof filter === 'function' ? filter : (a: any, b: any) => a === b;
  return source.filter(s => !items.some(i => filterFn(s, i)));
}

// Comment:
// To make sure we always have array of items
export function toArr<T>(items: T | T[]): T[] {
  return !Array.isArray(items) ? [items] : [...items];
}

// Comment:
// Little helper to check if an array is empty
export function emptyArr(arr: any[]) {
  return arr.length === 0;
}
