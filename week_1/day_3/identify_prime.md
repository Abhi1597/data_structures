# Identify Prime

You are provided an integer N, print "Yes" (without quotes) if the given integer is prime, else print "No" (without quotes).

### Input Format

First and the only integer contains N

### Constraints

N<100000

### Output Format

Output Yes or No depending on the conditions mentioned above.

Please note that the case of each character matters.

### Sample Input 0
```
13
```
### Sample Output 0
```
Yes
```
### Explanation 0
```
Since 13 is a prime number, the output is Yes
```
```javascript
function processData(input) {
    //Enter your code here
    var num = parseInt(input)
    var count = 0
    for(var i = 2; i < num -1; i++){
        if(num % i == 0){
            count++
        }
    }
    if(count == 0 || num == 2)
        console.log("Yes")
    else
        console.log("No")
} 
```