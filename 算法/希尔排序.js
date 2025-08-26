// 希尔排序（Shell Sort）基本思想：
// 通过设定不同的间隔（gap），将数组分组进行插入排序，然后逐步缩小间隔直至为 1，最终完成整个数组的排序。

function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

console.log(shellSort([7, 2, 6, 8, 0, 4, 1, 5, 9, 3]));
