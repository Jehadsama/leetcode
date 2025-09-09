// 快速排序（Quick Sort）基本思想：
// 采用分治策略，选择一个基准元素，将数组分为两部分：小于基准的元素放在左侧，大于基准的元素放在右侧。然后递归地对左右两部分进行排序，最终得到有序数组。

function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivot = partition(arr, low, high);

    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }

  return arr;
}
console.log(quickSort([5, 2, 3, 6, 1, 4]));
