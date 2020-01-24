# **String Cut**

You are given a string **S**. Cut it into 2 equal halves and reverse it.

So, suppose if you have a string "abcxyz" then after performing the above mentioned operation it becomes "cbazyx"

If you have a string "abcdxyz", then after performing the above mentioned operation it becomes "cbadzyx"

## Input Format

First line of input contains the string **S**

## Constraints

Length of S <= 1000

## Output Format

Print the string with the required changes

## Sample Input 0
```
abcxyz
```
## Sample Output 0
```
cbazyx
```
```javascript
function processData(input) {
    //Enter your code here
    var len = input.length, mid = 0
    if(len % 2 == 0)
        mid = len / 2
    else
        mid = Math.floor(len/2) + 1
          
    function evenReverse(){
        var reverse = ''
        for(var i = mid - 1; i >= 0; i--)
            reverse += input[i]
        for(var i = len -1 ; i >= mid; i--)
            reverse += input[i]
        return reverse
    }
    function oddReverse(){
        var reverse = ''
        for(var i = mid - 2; i >= 0; i--)
            reverse += input[i]
        reverse += input[mid-1]
        for(var i = len -1 ; i >= mid; i--)
            reverse += input[i]
        return reverse
    }
    if(len == 1)
        console.log(input)
    else if(len % 2 == 0)
        console.log(evenReverse())
    else
        console.log(oddReverse())  
}      
```
