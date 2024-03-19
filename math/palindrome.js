const palindrome = (num) =>{
    let rev = 0 
    let temp = num
    while(temp!=0){
        let lastDigit = temp%10
        rev = rev*10+lastDigit
        temp = Math.floor(temp/10)
    }
    return(rev==num)
}

let ans = palindrome(78987)
console.log(ans);