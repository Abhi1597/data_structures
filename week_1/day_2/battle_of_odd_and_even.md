#  Battle of Odd & Even

You are given an array A of N integers. Your task is to write a programme that prints "Odd" (without quotes) if the sum of all odd numbers present in the array is greater than sum of all the even numbers present in the array. In all other cases, print "Even" (without quotes).

### Input Format

First line contains N which is the number of elements present in the array.

Second line contains N space separated integers which are the elements of array.

### Constraints

N<100

### Output Format

Print either "Odd" or "Even" depending upon the condition mentioned above.

### Sample Input 0
```
4
1 2 3 4
````

### Sample Output 0
```
Even
```

Explanation 0

```
Odd numbers present are 1 and 3, whose sum is 4

Even numbers present in array are 2 and 4, whose sum is 6

Since 6>4, Even is the required output.
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var evenSum = 0, oddSum = 0
    input = input.split('\n')
    var arr = input[1].split(' ')
    for(var i = 0; i < arr.length; i++){
        if(parseInt(arr[i]) % 2 == 0){
            evenSum += Number(arr[i])
        }
        else{
            oddSum += Number(arr[i])
        }
    }
    if(oddSum > evenSum)
        console.log("Odd")
    else
        console.log("Even")
} 
```

```python
# Python
n = int(input())
arr = list(map(int, input().split()))
odd_sum = 0
even_sum = 0

for a in arr:
    if a % 2 == 0:
        even_sum += a
    else:
        odd_sum += a

if odd_sum > even_sum:
    print("Odd")
else:
    print("Even")
```