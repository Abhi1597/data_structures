# From subarray to submatrix

You will be given a matrix A(N rows, M column) of integers and K add operations to execute. An add operation adds a constant to all of the entries in a square sub-matrix of A and it is specified by 4 integers R,C,S and D where R is the row number, C is the column number, S is the size of the sub-matrix and D is the constant to add to the entries. The entry at row R and column C is denoted by A[R][C].

The row and column numbers in a query correspond to the upper-left corner of the square sub-matrix to update.

Your task it to print the matrix after applying all of the K add operations.

### Input Format

The first line of input contains three numbers N,M,K representing the number of rows, the number of columns and the number of add operations respectively. N lines follow each containing M space-separated integers. K lines follow each containing four numbers R,C,S and D as described above.

### Constraints

N,M,K <= 1000

R<=N

C<=M

S<=min(N,M)

D<=1000000

### Output Format

Print the matrix after applying all of the K add operations. The matrix should be printed on N lines each containing M space-separated integers.

### Sample Input 0

```
4 4 2
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
2 3 2 5
3 2 2 -3
```

### Sample Output 0
```
1 2 3 4 
5 6 12 13 
9 7 13 17 
13 11 12 16
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    
    input = input.split("\n")
    // console.log(input)
    var given = input[0].split(" ").map(function(ele){
        return parseInt(ele)
    })
    // console.log(given)
    var row = given[0]
    var col = given[1]
    var testCases = given[2], testArr = [], str = ""
    var arr = []
    for(var i = 0; i < row; i++){
        arr[i] = input[i+1].split(" ").map(function(ele){
            return parseInt(ele)
        })
    }
    // console.log(arr)
    
    for(var i = row+1, j = 0; j < testCases; i++, j++){
        testArr[j] = input[i].split(" ").map(function(ele){
            return parseInt(ele)
        }) 
    }
    // console.log(testArr)
    
    // Looping through every testCases
    for(var i =0; i < testCases; i++){
        var rowNo = testArr[i][0] - 1
        var colNo = testArr[i][1] - 1
        var sub = testArr[i][2]
        var change = testArr[i][3]
        changeMatrix(rowNo, colNo, sub, change)
    }
    
    // Printing the matrix
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            str += arr[i][j] + " "
        }
        str += "\n"
    }
    console.log(str)
    
    // Changing the matrix according to the testCase
    function changeMatrix(rowNo, colNo, sub, change){
        // console.log(rowNo, colNo, sub, change)
        var rowCount = 0
        for(var i = rowNo; rowCount < sub; i++, rowCount++){
            var colCount = 0
            for(var j = colNo; colCount < sub; j++, colCount++){                
                arr[i][j] += change
            }
        }
        // console.log(arr)
        return arr
    }
}  
```


