# Transpose the Matrx

The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix. See sample test case for better understanding

So, given an array of n rows and m columns, generate the transpose of the matrix.

### Input Format

First line contains two integers n and m

Next n lines contain m integers which represents each row of 2d array

### Constraints

n,m <= 500

### Output Format

Print the transposed array

### Sample Input 0

```
5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
```

### Sample Output 0
```
0 1 2 3 4 
0 1 2 3 4 
0 1 2 3 4 
0 1 2 3 4 
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    input = input.split("\n")
    var line1 = input[0].split(" ").map(function(ele){
        return parseInt(ele)
    })
    var row = line1[0]
    var col = line1[1]
    // console.log(row, col)
    var arr = [], str = ""
    for(var i = 0; i < row; i++){
        arr[i] = input[i+1].split(" ").map(function(ele){
            return parseInt(ele)
        })
    }
    // console.log(arr)
    for(var i = 0; i < col; i++){
        for(var j = 0; j < row; j++){
            str += arr[j][i] + " "
        }
        str += "\n"
    }
    console.log(str)
}  
```


