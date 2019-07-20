/*
Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk
Returns
    (Array): Returns the new array of chunks.
*/

var testChunk = [1, 2, 3, 4, 5, 6, 7, 8];

function chunk(array, size) {
    if (array.length && size === 0) {
        return [];
    }

    if (!size && size !== 0) {
        size = 1;
    }

    var res = [];
    var arr = array;

    while (arr.length) {
        res.push(arr.splice(0, size));
    }

    return res;
}

/*
Arguments
    array (Array): The array to compact.
Returns
    (Array): Returns the new array of filtered values.
*/
var testCompact = [0, 1, false, true, 2, '', 3];

function compact(array) {
    // return array.filter(function(item) {
    //     return !!item
    // });

    var res = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            res.push(array[i]);
        }
    }

    return res;
}

/*
Arguments
    array (Array): The array to concatenate.
    [values] (...*): The values to concatenate.
Returns
    (Array): Returns the new concatenated array.
*/
var testContact = [1];
// console.log(concat(array, 2, [3], [[4]]));

function concat() {
    var arr = arguments[0];
    var rest = [].slice.call(arguments, 1);
    var i = 0;

    while (i < rest.length) {
        arr = arr.concat(rest[i]);
        i++;
    }

    return arr;
}

/*
Arguments
    array (Array): The array to inspect.
    [values] (...Array): The values to exclude.
Returns
    (Array): Returns the new array of filtered values.
*/

function difference() {
    var arr = arguments[0];
    var rest = arguments[1];

    return arr.filter(function (item) {
        return rest.indexOf(item) < 0;
    });
}

/*
Arguments
    array (Array): The array to inspect.
    [values] (...Array): The values to exclude.
    [iteratee=_.identity] (Function): The iteratee invoked per element.
Returns
    (Array): Returns the new array of filtered values.
*/

function differenceBy(arr, values, iterate) {
    debugger;
    if (typeof (iterate) === 'function') {
        return difference(arr, values).filter(function (item) {
            return iterate(item);
        });
    } else if (typeof (iterate) === 'string') {
        return arr.filter(function (a) {
            return !values.some(function (b) {
                return b[iterate] === a[iterate];
            });
        });
    } else {
        return [];
    }
}
