var test = [1, 2, 3, 4, 5, 6, 7, 8];
var test2 = [0, 1, false, true, 2, '', 3];

/*
Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk
Returns
    (Array): Returns the new array of chunks.
*/

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