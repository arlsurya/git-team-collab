
const arr = [1, 2, 3, 4, 5]
let sum = 0
arr.map(item => {
    if (item % 2 === 0)
        sum = sum + item

})
console.log(sum)

