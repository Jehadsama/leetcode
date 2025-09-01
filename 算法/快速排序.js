// 快速排序（Quick Sort）基本思想：
// 采用分治策略，选择一个基准元素，将数组分为两部分：小于基准的元素放在左侧，大于基准的元素放在右侧。然后递归地对左右两部分进行排序，最终得到有序数组。

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];
  let leftIndex = 1;
  let rightIndex = arr.length - 1;

  if (leftIndex === rightIndex) {
    if (arr[leftIndex] > pivot) {
      rightArr.push(arr[leftIndex]);
    } else {
      leftArr.push(arr[leftIndex]);
    }
  }

  while (leftIndex !== rightIndex) {
    if (arr[leftIndex] > pivot) {
      rightArr.push(arr[leftIndex]);
    } else {
      leftArr.push(arr[leftIndex]);
    }
    if (arr[rightIndex] <= pivot) {
      leftArr.push(arr[rightIndex]);
    } else {
      rightArr.push(arr[rightIndex]);
    }
    leftIndex++;
    rightIndex--;

    if (leftIndex === rightIndex) {
      if (arr[leftIndex] > pivot) {
        rightArr.push(arr[leftIndex]);
      } else {
        leftArr.push(arr[leftIndex]);
      }
      break;
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([5, 2, 3, 6, 1, 4]));
