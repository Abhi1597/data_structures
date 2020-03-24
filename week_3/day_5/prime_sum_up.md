# Prime Sum Up

You are given a number **N**. Your task is to write a program that calculates the sum of all prime numbers below **N**.(including **N** if **N** is a prime )

### Input Format

First and only line contains **N**

### Constraints

N<1000

### Output Format

Print sum of all such numbers

### Sample Input 0

```
13
```

### Sample Output 0
```
41
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    var limit = parseInt(input)
    var sum = 0
    for(var i = 2; i <= limit; i++){
        if(isPrime(i)){
            sum += i
        }
    }
    // Check if num is prime or not
    function isPrime(num){
        for(var i = 2; i <= num/2; i++){
            if(num%i == 0)
                return false
        }
        return true
    }
    
    if(limit < 2)
        console.log(0)
    else
        console.log(sum)
}   
```


