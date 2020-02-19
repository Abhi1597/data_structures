# 2D Array and Phrase

You are given an array of n rows and m columns which contains lower case English letters. How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

[example](https://s3.amazonaws.com/hr-assets/0/1570565957-cafc9ceccb-Screenshotfrom2019-10-0821-28-33.png)

### Input Format

First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid

Next n lines: Each line contains m characters which contains lower-case English letters only

### Constraints

1 <= n,m <= 100

### Output Format

Print the number of times the word “saba” appears in the grid.

### Sample Input 0

```
5 5
safer
amjad
babol
aaron
songs

```

### Sample Output 0
```
2
```

```javascript
function processData(input) {
    //Enter your code here
    // Time complexity : O(n^2)
    input = input.split('\n')
    var size = input[0].split(' ').map(function(elem){
        return parseInt(elem)
    })
    var n = size[0], m = size[1], arr = []
    for(var k = 1; k <= n; k++){
        arr.push(input[k].split(''))
    }
    var count = 0
    // Checking horizontal lines of matrix
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m - 3; j++){
            if(arr[i][j] == 's'){
                if((arr[i][j+1] == 'a') && (arr[i][j+2] == 'b') && (arr[i][j+3] == 'a')){
                    count++
                }
            }
        }
    }
    // console.log(count , "check1")
    
    // Checking vertical lines of matrix
    for(var i = 0; i < n - 3; i++){
        for(var j = 0; j < m; j++){
            if(arr[i][j] == 's'){
                if((arr[i+1][j] == 'a') && (arr[i+2][j] == 'b') && (arr[i+3][j] == 'a')){
                    count++
                }
            }
        }
    }
    // console.log(count , "check2")
    
    // Checking top diagonal lines of matrix
    for(var i = 0; i < n - 3; i++){
        for(var j = 0; j < m - 3; j++){
            if(arr[i][j] == 's'){
                if(arr[i+1][j+1] == 'a' && arr[i+2][j+2] == 'b' && arr[i+3][j+3] == 'a'){
                    count++
                }
            }
            
        }
    }
    // console.log(count , "check3")
    
    // Checking bottom diagonal lines of matrix
    for(var i = 3; i < n ; i++){
        for(var j = 0; j < m - 3; j++){
            if(arr[i][j] == 's'){
                if(arr[i-1][j+1] == 'a' && arr[i-2][j+2] == 'b' && arr[i-3][j+3] == 'a'){
                    count++
                }
            }
        }
    }
    // console.log(count , "check4")
    
    console.log(count)
}  
```


