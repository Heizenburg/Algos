function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; 
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];
    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e); // Only doing this once. 
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);

    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }

  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }

    return [...merged, ...array1, ...array2];
  }
}

console.log("BubbleSort : " + bubbleSort([58, 58, 98, 516, 4, 8959, 345, 45, 97, 47]));
console.log("SelectionSort : " + selectionSort([58, 58, 98, 516, 4, 8959, 345, 45, 97, 47]));
console.log("InsertionSort : " + insertionSort([58, 58, 98, 516, 4, 8959, 345, 45, 97, 47]));
console.log("QuickSort : " + quickSort([58, 58, 98, 516, 4, 8959, 345, 45, 97, 47]));
console.log("MergeSort : " + mergeSort([58, 58, 98, 516, 4, 8959, 345, 45, 97, 47]));