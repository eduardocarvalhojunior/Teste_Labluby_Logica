function newText(quantity, element) {

    return Array(quantity).fill(element);

}

Newtext(3, 'a');


//-------------------------------------------


function percorreArray(arr) {

    var newArray = [];
    for (var i = arr.length - 1; >= 0; i--) {

        newArray.push(arr[i]);
    }

    return newArray;

}

percorreArray([1, 2, 3, 4])



//--------------------------------------------


function bombox(arr) {

    return arr.filter(Boolean);

}

bombox([1, 2, '', undefined]);

// -----------------------------------------


function trocaArray(arr) {

    return Object.fromEntries(arr);

}

trocaArray([["c", 2], ["d", 4]]);


// ------------------------------------



function filterElements(arr, elementsToFilter) {

    let filteredElements = arr.filter(function (element) {

        return !elementsToFilter.includes(element);

    });

    return filteredElements;

}

filterElements([5, 4, 3, 2, 5], [5, 3]);


//-------------------------------------------



function removeDuplicidade(arr) {

    return newValues = [...new Set(arr)];

}

removeDuplicidade([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);


//-----------------------------------------------


function compareArrays(arr1, arr2) {

    return JSON.stringify(arr1) == JSON.stringify(arr2);

}

compareArrays([1, 2, 3, 4], [1, 2, 3, 4])

//---------------------------------------


function strong(arr) {
    return arr.flat();
}

strong([1, 2, [3], [4, 5]]);



//------------------------------------------------


function newState(array, size) {

    let result = []
    for (value of array) {
        let lastArray = result[result.length - 1]
        if (!lastArray || lastArray.length == size) {

            result.push([value])
        } else {

            lastArray.push(value)

        }

    }
    return result

}

newState([1, 2, 3, 4, 5], 2);


//--------------------------------------------


function controllike(arr1, arr2) {

    return arr1.filter(value => arr2.includes(value))

}

controllikes([6, 8], [8, 9]);

 //-----------------------------------------------------
