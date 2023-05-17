function findFirstDuplicate(arr) {
  let duplicate = []
  for (let i = 0; i < arr.length; i ++) {
    if(duplicate.includes(arr[i])){
      return arr[i]
    } else {
      duplicate.push(arr[i])
    }
  }
  return -1;
}

if (require.main === module) {

  console.log(findFirstDuplicate([1,2,3,4,3]))
  console.log(findFirstDuplicate([5,6,7,8]))

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
