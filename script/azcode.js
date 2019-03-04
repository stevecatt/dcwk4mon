let numbers = [1,2,2,3,4,5,6,3]
let filteredNumbers = []


for(let index = 0; index < numbers.length; index ++) {

  let number = numbers[index]

  // lenght = 0 means array is empty
  if(filteredNumbers.length == 0) {
      filteredNumbers.push(number)
  } else {

    let found = false
    // now check if the number is already in the filtered array
    for(let j = 0; j < filteredNumbers.length; j++) {
      // check if the number is already in filtered array
      if(number == filteredNumbers[j]) {
        found = true
        break
      }
    }

    if(found == false) {
      filteredNumbers.push(number)
    }

  }

}

console.log(numbers)
console.log(filteredNumbers)