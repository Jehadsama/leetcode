function bubbleSort(arr) {
  let n = arr.length;

  while (n > 0) {
    for (let i = 0; i < n - 1; i++) {
      let temp = arr[i];

      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    n--;
  }
  return arr;
}

console.log(bubbleSort([5, 2, 3, 6, 1, 4]));
