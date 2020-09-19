# Conditional Matrix Sum

You are given a matrix(2 dimensional array) of integers of ***n*** rows and ***m*** columns. Your task is to write a programme that calculates sum of all such integers present in the matrix which are divisible by 3. 

### Input Format

First line contains ***n*** and ***m***.

In the next ***n*** lines, there are ***m*** integers in each line which makes up elements of matrix.

### Constraints

n<100

m<100

### Output Format

Output one number which is the sum of all such integers which are divisible by 3.

### Sample Input 0

```
2 3
3 1 8
2 6 0
```

### Sample Output 0
```
9
```
Explanation 0
```
The given 2 dimensional array has 2 rows and 3 columns.

There are two integers present in this array which are divisible by 3 (those are 3 and 6). So, the output is 9.
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var arr1 = input[0].split(' '), arr = []
    var row = Number(arr1[0])
    var col = Number(arr1[1])
    for(var i = 0; i < row; i++){
        arr[i] = input[i+1].split(' ').map(function(ele){
            return parseInt(ele)
        })
    }
    var sum = 0
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            if(arr[i][j] % 3 == 0){
                sum += arr[i][j]
            }
        }
    }
    console.log(sum)
}   
```
```python
# python
n, m = map(int, input().split())

div_by_3 = 0
for i in range(n):
    arr = list(map(int, input().split()))
    for j in range(m):
        if arr[j] % 3 == 0:
            div_by_3 += arr[j]

print(div_by_3)

```

