// 选择排序（Selection Sort）基本思想：
// 将数组分为两个区间：左侧为已排序区间，右侧为未排序区间。每趟从未排序区间中选择最小的元素，放到已排序区间的末尾。

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([3, 2, 1]));
