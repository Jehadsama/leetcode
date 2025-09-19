// 堆排序（Heap sort）基本思想：
// 利用堆的特性，将数组构建成大顶堆，然后重复取出堆顶元素（最大值）并调整堆结构，最终得到有序数组。

function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  return arr;
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

}


function heapify(arr, rootIndex, heapSize) {


  let largestIndex = rootIndex;
  let leftIndex = 2 * rootIndex + 1;
  let rightIndex = 2 * rootIndex + 2;

  if (leftIndex < heapSize && arr[leftIndex] > arr[largestIndex]) {

    largestIndex = leftIndex;

  }

  if (rightIndex < heapSize && arr[rightIndex] > arr[largestIndex]) {

    largestIndex = rightIndex;
  }


  if (largestIndex !== rootIndex) {

    [arr[rootIndex], arr[largestIndex]] = [arr[largestIndex], arr[rootIndex]];

    heapify(arr, largestIndex, heapSize);

  }

}


console.log(heapSort([9, 2, 3, 1, 8, 5]));