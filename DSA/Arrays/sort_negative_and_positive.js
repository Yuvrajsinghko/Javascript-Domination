let arr = [-1, 2, -8, 6, 8, 9, 7, -4, -3, 5, 1, -3, 7, 4];

let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] > 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);
