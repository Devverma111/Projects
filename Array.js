const first = (arr, n) => {
  if (arr == null || n == null) {
    return [];
  }
  if (n < 0) {
    return [];
  }
  if (n === undefined) {
    return arr[0];
  }
  return arr.slice(0, n);
};