# Smaller Neighbour Element

Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

Mathematically,
```javascript
G[i] for an element A[i] is an element A[j] such that 
    j is maximum possible AND 
    j < i AND
    A[j] < A[i]
```
Note: Elements for which no smaller element exist, consider next smaller element as -1.

### Input Format

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

### Constraints

N < 100000

### Output Format

Print N space separated integers denoting the array G.

### Sample Input 0

```
8
39 27 11 4 24 32 32 1
```

### Sample Output 0
```
-1 -1 -1 -1 4 24 24 -1
```

```javascript
// Optimised Solution
function processData(input) {
    //Enter your code here
    // Time Complexity: O(n)
    input = input.split("\n")
    var size = Number(input[0])
    var arr = input[1].split(" ").map(e => Number(e))
    // console.log(arr)
    var ans = [], stack = [], str = ""
    ans.push(-1)
    stack.push(arr[0])
    
    for(var i = 1; i< size; i++){
        while(stack[stack.length-1] >= arr[i]){
            stack.pop()
        }
        // console.log(stack,arr[i])
        if(stack.length == 0){
            ans.push(-1)
        }
        else{
            // console.log(stack)
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    // console.log(ans)
    for(var i = 0; i < size; i++){
        str += ans[i] + " "
    }
    console.log(str)
} 
```


