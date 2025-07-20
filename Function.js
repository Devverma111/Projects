// 1 Convert an Array to a String
const myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.join());
console.log(myColor.join(','));
console.log(myColor.join('+'));


// 2 Find the Most Frequent Item in an Array
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function findMostFrequent(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentItem = null;

 
  for (const item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  }

  
  for (const item in frequencyMap) {
    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentItem = item;
    }
  }

  return `${mostFrequentItem} ( ${maxCount} times )`;
}

console.log(findMostFrequent(arr1));



// 3. Truncate a String
function truncateString(str, num) {
  return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4));


// 4. Capitalize the First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(' ') 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' '); 
}

console.log(capitalizeWords('js string exercises'));