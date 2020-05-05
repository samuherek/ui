'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
function union(source, items, filter) {
  var filterFn = typeof filter === 'function' ? filter : function (a, b) {
    return a === b;
  };
  return items.reduce(function (prev, next) {
    if (!prev.some(function (p) {
      return filterFn(p, next);
    })) {
      prev.push(next);
    }

    return prev;
  }, [].concat(source));
} // Comment:
// This is used for creating a difference array of elements of the same
// type into an array without duplicates. This function is similar to
// "union" helper. In this case, we are removing an item from
// the reference array which is usually stored in "context" for alter
// use. The reason for accepting "filter" function is so we can
// compare the values without any set rules. We want to compare
// campaigns as well as kpis which have different comparison functions.

function difference(source, items, filter) {
  var filterFn = typeof filter === 'function' ? filter : function (a, b) {
    return a === b;
  };
  return source.filter(function (s) {
    return !items.some(function (i) {
      return filterFn(s, i);
    });
  });
} // Comment:
// To make sure we always have array of items

function toArr(items) {
  return !Array.isArray(items) ? [items] : [].concat(items);
} // Comment:

var MSG = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  RESET: 'RESET'
};

function defaultCompareFn(source, check) {
  if (typeof source === 'string' && typeof check === 'string') {
    return source === check;
  } else if (typeof check === 'object' && typeof check === 'object') {
    return source.id === check.id;
  }

  throw new Error('useSElection: wrong compareFn builder');
}

function reducer(state, msg) {
  switch (msg.type) {
    case MSG.ADD:
      {
        return _extends(_extends({}, state), {}, {
          selected: union(state.selected, msg.payload, state.compareFn)
        });
      }

    case MSG.REMOVE:
      {
        return _extends(_extends({}, state), {}, {
          selected: difference(state.selected, msg.payload, state.compareFn)
        });
      }

    case MSG.RESET:
      {
        return _extends(_extends({}, state), {}, {
          selected: state.initialSelected
        });
      }

    default:
      {
        // TODO: change this into a function which is reused and stripped
        // from the code in compile process. The same happens in other places
        {
          // @ts-ignore
          throw new Error("useSelection: Unsupported action type: " + msg.type);
        }
      }
  }
} // TODO: change initial data if it changes in a React.useEffect();


function useSelection(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$initialSelected = _ref.initialSelected,
      initialSelected = _ref$initialSelected === void 0 ? [] : _ref$initialSelected,
      _ref$compareFn = _ref.compareFn,
      compareFn = _ref$compareFn === void 0 ? defaultCompareFn : _ref$compareFn;

  var _React$useReducer = React.useReducer(reducer, {
    selected: initialSelected,
    initialSelected: initialSelected,
    compareFn: compareFn
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var add = React.useCallback(function (adding) {
    return dispatch({
      type: MSG.ADD,
      payload: toArr(adding)
    });
  }, [dispatch]);
  var remove = React.useCallback(function (removing) {
    return dispatch({
      type: MSG.REMOVE,
      payload: toArr(removing)
    });
  }, [dispatch]);
  var reset = React.useCallback(function () {
    return dispatch({
      type: MSG.RESET,
      payload: initialSelected
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch]);
  var touched = state.initialSelected.length !== state.selected.length;
  return _extends(_extends({}, state), {}, {
    add: add,
    remove: remove,
    reset: reset,
    touched: touched
  });
}

exports.useSelection = useSelection;
//# sourceMappingURL=hooks.cjs.development.js.map
