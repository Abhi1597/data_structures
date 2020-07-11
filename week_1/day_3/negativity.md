# Negativity!

You are given an array of N integers. Find the total count of negative elements present in the array.

### Input Format

First line contains N integers

Second line contains N space separated integers which constitute the array.

### Constraints

N < 100

### Output Format

Output the number of negative integers present in the array

### Sample Input 0
```
5
-3 0 -5 9 8
```
### Sample Output 0
```
2
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = parseInt(input[0])
    var arr = input[1].split(' ')
    var count = 0
    for(var i = 0; i < num; i++){
        if(arr[i] < 0){
            count++
        }
    }
    console.log(count)
} 
```
```python
# Python
n = int(input())
arr = list(map(int, input().split()))
count = 0

for a in arr:
    if a < 0:
        count += 1
print(count)
```
