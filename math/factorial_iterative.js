const factorial = (nums) =>{
    let temp = 1
    if (nums == 0 || nums == 1) return 1

    for (let i = 2; i <= nums; i++) {
        temp =  temp*i
    }
    return temp

}

console.log(factorial(4));