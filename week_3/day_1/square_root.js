let num = 5

function squareRoot(num){
    let precision = Math.pow(10, -16)
    let low = 0
    let high = num
    let count = 0
    // console.log(precision)
    while(high-low > precision){
        count++
        let mid = low + (high-low)/2
        // console.log(low, mid, high)
        if(mid*mid < num){
            low = mid
        }
        else{
            high = mid
        }
    }
    console.log(count)
    return low + ((high-low)/2)
}

console.log(squareRoot(num))