# **Sum of Special Pairs**

You are given an array **A** of **N** integers. Write a program to find the sum of [absolute](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

## Input Format

First line contains **N**

Second line contains **N** space separated integers which are elements of **A**

## Constraints

N<1000

## Output Format

Output one number as per condition mentioned above

## Sample Input 0
```
6
1 2 3 5 7 12
```
## Sample Output 0
```
45
```
## Explanation 0
```
All valid index pairs are:
(5, 0) -> abs(12 – 1) = 11
(3, 0) -> abs(5 – 1) = 4
(2, 0) -> abs(3 – 1) = 2
(4, 1) -> abs(7 – 2) = 5
(3, 1) -> abs(5 – 2) = 3
(5, 2) -> abs(12 – 3) = 9
(4, 2) -> abs(7 – 3) = 4
(5, 3) -> abs(12 – 5) = 7
11 + 4 + 2 + 5 + 3 + 9 + 4 + 7 = 45
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = parseInt(input[0])
    var arr = input[1].split(' ')
    for(var i = 0; i < size; i++){
        arr[i] = parseInt(arr[i])
    }
    
    var sum = 0
    for(var j = size - 1; j > 0; j--){
        for(var i = 0; i < j; i++){
            if(isPrime(j,i)){
                sum += Math.abs(arr[j] - arr[i])
            }
        }
    }
    console.log(sum)
    
    function isPrime(j, i){
        var num = j - i
        if(num < 2)
            return false
        for(var k = 2; k <= num/2; k++){
            if(num % k == 0)
                return false
        }
        return true
    }          
}     
```
```python
# python
import math

n = int(input())
arr = list(map(int, input().split()))

def isPrime(n):
    high = math.floor(math.sqrt(n)) + 1
    for i in range(2, high):
        if n % i == 0:
            return False
    return True

s = 0
for i in range(n-2):
    for j in range(i+2, n):
        if isPrime(j-i):
            s += abs(arr[j] - arr[i])

print(s)

```