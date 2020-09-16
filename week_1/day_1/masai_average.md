# Masai Average

Given an array, A, of N integers, print the ceil of average of numbers present in given array

### Input Format

The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

### Constraints

N<100

### Output Format

Print an integer which is ceil of average of integers present in array

### Sample Input 0

```
3
1 2 3
```

### Sample Output 0
```
2
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var sum = 0, average
    input = input.split('\n')
    var num = parseInt(input[0])
    var arr = input[1].split(' ')
    for(var i = 0; i < arr.length; i++){
        sum += parseInt(arr[i])
    }
    average = Math.ceil(sum/num)
    console.log(average)
} 
```

```python
# Python
import math
n = int(input())
arr = input().split(" ")
sum = 0

for a in arr:
    sum += int(a)
avg = math.ceil(sum/n)
print(avg)
```
