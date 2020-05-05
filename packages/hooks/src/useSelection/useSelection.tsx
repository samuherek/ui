// @flow
/* eslint-disable no-use-before-define */
import React from 'react';
import { toArr, difference, union } from '../utils/array';

export type CompareFn<T> = (a: T, b: T) => boolean;

export type Options<T> = {
  initialSelected?: T[];
  compareFn?: CompareFn<T>;
};

export type State<T> = {
  selected: T[];
  initialSelected: T[];
  compareFn: CompareFn<T>;
};

const MSG = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  RESET: 'RESET',
} as const;

// TODO: figure out how to use it without hardcoded values
// it does not want to take the vales from the MSG above.
type Message<T> =
  | { type: 'ADD'; payload: T[] }
  | { type: 'REMOVE'; payload: T[] }
  | { type: 'RESET'; payload: T[] };

function defaultCompareFn(source: any, check: any) {
  if (typeof source === 'string' && typeof check === 'string') {
    return source === check;
  } else if (typeof check === 'object' && typeof check === 'object') {
    return source.id === check.id;
  }
  throw new Error('useSElection: wrong compareFn builder');
}

function reducer<T>(state: State<T>, msg: Message<T>) {
  switch (msg.type) {
    case MSG.ADD: {
      return {
        ...state,
        selected: union<T>(state.selected, msg.payload, state.compareFn),
      };
    }
    case MSG.REMOVE: {
      return {
        ...state,
        selected: difference<T>(state.selected, msg.payload, state.compareFn),
      };
    }
    case MSG.RESET: {
      return {
        ...state,
        selected: state.initialSelected,
      };
    }
    default: {
      // TODO: change this into a function which is reused and stripped
      // from the code in compile process. The same happens in other places
      if (process.env.NODE_ENV !== 'production') {
        // @ts-ignore
        throw new Error(`useSelection: Unsupported action type: ${msg.type}`);
      }
      return state;
    }
  }
}

// TODO: change initial data if it changes in a React.useEffect();
function useSelection<T>({
  initialSelected = [],
  compareFn = defaultCompareFn,
}: Options<T> = {}) {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<T>, Message<T>>
  >(reducer, {
    selected: initialSelected,
    initialSelected: initialSelected,
    compareFn,
  });

  const add = React.useCallback(
    (adding: T | T[]) => dispatch({ type: MSG.ADD, payload: toArr<T>(adding) }),
    [dispatch]
  );

  const remove = React.useCallback(
    (removing: T | T[]) =>
      dispatch({ type: MSG.REMOVE, payload: toArr<T>(removing) }),
    [dispatch]
  );

  const reset = React.useCallback(
    () => dispatch({ type: MSG.RESET, payload: initialSelected }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const touched = state.initialSelected.length !== state.selected.length;

  return {
    ...state,
    add,
    remove,
    reset,
    touched,
  };
}

export { useSelection };
