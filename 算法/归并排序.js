// 归并排序（Merge Sort）基本思想：
// 利用分治法，将数组递归地一分为二，直至每个子数组只包含一个元素。随后，将这些有序子数组两两合并，最终得到一个整体有序的数组。

function mergeSort(arr) {
  const _merge = (leftArr, rightArr) => {
    const result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] <= rightArr[rightIndex]) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < leftArr.length) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < rightArr.length) {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }

    return result;
    f;
  };

  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));

  return _merge(leftArr, rightArr);
}

console.log(mergeSort([0, 5, 7, 3, 1, 6, 8, 4]));
