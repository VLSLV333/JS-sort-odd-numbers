const numbersForTest = [5, 3, 2, 8, 1, 4];

const sortNumbers = (array) => {
    const oddNumbers = array.filter( (num) => num%2)
    oddNumbers.sort( (a,b) => a - b)
    console.log(array.map( (num) => num%2 ? oddNumbers.shift() : num))
}

console.log(sortNumbers(numbersForTest))