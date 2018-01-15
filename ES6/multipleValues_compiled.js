"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function function_name() {
    return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
}

var q, w, e, r, t, y;

//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes

var _function_name = function_name();

var _function_name2 = _slicedToArray(_function_name, 6);

q = _function_name2[0];
w = _function_name2[1];
r = _function_name2[3];
y = _function_name2[5];


alert(y); //y is 0
