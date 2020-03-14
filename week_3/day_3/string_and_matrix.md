# String & Matrix

You are given a matrix of characters. The matrix has N rows and M columns. Given a string s, you have to tell if it is possible to generate that string from given matrix. Rules for generating string from matrix are:

1) You have to pick first character of string from row 1, second character from row 2 and so on. The (N+1)th character of string is to be picked from row 1, that is, you can traverse the rows in a cyclic manner (row 1 comes after row N).

2) If an occurrence of a character is picked from a row, you cannot pick the same occurrence again from that row.

You have to print Yes if given string can be generated from matrix using the given rules, else print No.

### Input Format

First line consists of T, denoting the number of test cases.

Each test case consists of:

First line consists of two integers N and M, denoting the matrix dimensions.

Following N lines consist of M characters each.

Last line consists of a string s. 

### Constraints

T <= 5

N,M <= 500

Length of string < N*M

Matrix consists of lowercase English characters.

String s consists of lowercase English characters.

### Output Format

For each test case, print "Yes" if string can be generated else print "No". Answer for each test case should come in a new line. 

### Sample Input 0

```
1
3 3
aba
xyz
bdr
axbaydb
```

### Sample Output 0
```
Yes
```

### Explanation 0
```
We pick "a" from row 1. Now, we can only pick one more "a" from row 1 as one "a" is already used.
Similarly, "x" from row 2, "b" from row 3.
Now, we again go back to row 1.
We pick "a" from row 1, "y" from row 2 and so on.
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    input = input.split('\n')
    var testCases = Number(input[0])
    var lineNo = 1
    
    // Checking for each testCase
    for(var i = 0, lineNo; i < testCases; i++, lineNo++){
        var size = input[lineNo].split(" "), arr = []
        var row = Number(size[0])
        var col = Number(size[1])
        lineNo++
        for(var j = 0; j < row; j++, lineNo++){
            arr.push(input[lineNo].split(""))
        }
        var testArr = input[lineNo].split("")
        console.log(checkCharacter(testArr, arr))
    }    
    
    // Checking each test array with the given Matrix
    function checkCharacter(test, newArr){
        for(var i = 0, k= 0;k < test.length; i++,k++){
            var count = 0
            for(var j = 0; j < col; j++){
                if(test[k] == newArr[i][j]){
                    newArr[i][j] = null
                    count++
                    break
                }
            }
            if(count < 1){
                return "No"
            }
            if(i == row-1)
                i = -1
        }
        return "Yes"
    }  
}   
```


