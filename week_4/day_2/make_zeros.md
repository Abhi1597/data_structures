# Make Zeros (Ad-Hoc)

Suppose we have an array of non-negative integers, like a_1, a_2, ... ,a_n. At each time we can choose one term a_i with 0 < i < n and we subtract 1 from both a_i and a_i+1. Comment if it is possible to get an array of all zeros after several operations.

### Input Format

The first line of test case is a number N. (0 < N <= 10000) The next line is N non-negative integers, 0 <= a_i <= 109

### Constraints

0 < N <= 10000

### Output Format

If it can be modified into all zeros with several operations output “YES” in a single line, otherwise output “NO” instead.

### Sample Input 0

```
2
1 2
```

### Sample Output 0
```
NO
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity: O(n)
    input = input.split("\n")
    var size = Number(input[0])
    var arr = input[1].split(" ").map(e => Number(e))
    
    function check(){
        if(size === 1){
            if(arr[0])
                return false
            return true
        }
        for(let i = 0; i < size-1; i++){
            arr[i+1] -= arr[i]
            arr[i] = 0
        }
        if(arr[size-1] !== 0)
            return false
        return true
    }
    if(check())
        console.log("YES")
    else
        console.log("NO")  
} 
```


