// 冒泡排序（Bubble Sort）基本思想：
// 通过相邻元素的比较与交换，将较大的元素逐步「冒泡」到数组末尾，较小的元素自然「下沉」到数组开头。

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
