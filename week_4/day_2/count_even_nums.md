# Count Even Numbers

You have a string S and its starting index is 1. The string S consists of characters from 1-9. You are asked to count the number of even numbered characters ( i.e 2,4,6,8) for every index i . 

For an index i, the result should be calculated from i to the end of the string. 

### Input Format

First line contains a string S. 

### Constraints

Length of string S <= 10000

### Output Format

Print space-separated integers,the result of every index.

### Sample Input 0

```
574674546476
```

### Sample Output 0
```
7 7 7 6 5 5 4 4 3 2 1 1
```

```javascript
// Method -1
function processData(input) {
    //Enter your code here
    // Time Complexity: O(n^2)
    input = input.split("")
    var size = input.length, arr = [], str = ""
    for(var i = 0; i < size; i++){
        arr[i] = parseInt(input[i])
    }
    // console.log(arr)
    for(var i = 0; i < size; i++){
        var count = 0
        for(var j = i; j < size; j++){
            if(arr[j] % 2 == 0)
                count++
        }
        str += count + " "
    }
    console.log(str)
} 

// Method- 2
function processData(input) {
    //Enter your code here
    // Time Complexity: O(n)
    const arr = input.trim().split("").map(e => Number(e))
    const n = arr.length 
    var stack = [], count = 0
    for(var i = n-1; i >= 0; i--){
        if(arr[i]%2 === 0)
            count++
        stack.push(count)
    }
    var str = ""
    for(let i = n-1; i >= 0; i--){
        str += stack[i] + " "
    }
    console.log(str)
} 
```


