const myArr = [1, 2, 5, 7, 8, 9, 11, 13, 18, 21, 22, 23, 24, 27, 31, 33];

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length;
  let mid = 0;
  let step = 0;
  let result = 'Nothing found';

  while (low <= high) {
    mid = Math.floor((high - low) / 2 + low);
    if (item === arr[mid]) {
      step += 1;
      result = `Found: ${item} position: ${mid} in ${step} steps`;
      break;
    } else if (item > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    step += 1;
  }
  return result;
}

console.log(binarySearch(myArr, 27));
