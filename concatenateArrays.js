function concat(array1, array2) {
  if (
    array1 == undefined ||
    array1.length === 0 ||
    (array2 == undefined || array2.length === 0)
  ) {
    return array1.concat(array2);
  } else {
    return array1.concat(array2);
  }
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
