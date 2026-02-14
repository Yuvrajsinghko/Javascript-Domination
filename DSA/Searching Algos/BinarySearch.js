//Binary Search

let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];

function binarySerch(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) return `Element ${arr[mid]} is at ${mid} index.`;
    else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySerch(arr, 0, arr.length - 1, 1250));
