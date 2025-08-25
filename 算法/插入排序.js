// 插入排序（Insertion Sort）基本思想：
// 将数组分为有序区间和无序区间，每次从无序区间取出一个元素插入到有序区间的正确位置。

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

console.log(insertionSort([5, 2, 3, 6, 1, 4]));
