const count = (num) =>{
    let count = 0;
    if (num ==0) return 1
    while(num>0){
       num = Math.floor(num /10)
       ++count;
    }
    return count
}

let x = count(123)
console.log(x);