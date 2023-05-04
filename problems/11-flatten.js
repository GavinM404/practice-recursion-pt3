/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
//move through the arrays
//have an empty array that we push the values into the arr
//maybe use slice
//isArray
function flatten(arr) {
  let flatArr = [];
 /* if (arr.length === 0){
    return [];
  } else {
    flatArr.push()
  }
}*/
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
    } else {
      flatArr.push(element);
    }
  });
  return flatArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
