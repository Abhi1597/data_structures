# Signal Capacity

There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

{(the number of contiguous towers just to the left of the given tower whose height is less than or equal to the height of the given tower) + 1}.

You need to write a program that finds the power of each tower.

### Input Format

Each test case has multiple test cases in it:

First line contains an integer specifying the number of test cases.

Second line contains an integer n specifying the number of towers.

Third line contains n space separated integers(H[i]) denoting the height of each tower.

### Constraints

1 <= T <= 10

2 <= n <= 10^6

1 <= H[i] <= 10^8

### Output Format

Print the range of each tower (separated by a space).

### Sample Input 0

```
2
7
100 80 60 70 60 75 85
5
3 5 0 9 8
```

### Sample Output 0
```
1 1 1 2 1 4 6
1 2 1 4 1
```

### Explanation 0
```
There are 2 test case:

In first test case:
7 towers are present, and signal range of each tower separated by space:1 1 1 2 1 4 6

Similarly,
In second test case, we have 5 towers whose signal range is given
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split("\n")
    var testCases = Number(input[0])
    var lineNo = 1
    for(var i = 0; i < testCases; i++){
        var size = Number(input[lineNo])
        var arr = input[++lineNo].split(" ").map(e => parseInt(e))
        // console.log(arr, size)
        signalStrength(arr, size)
        lineNo++
    }
    
    function signalStrength(arr, n){
        var ans = [], stack = [], positionStack = []
        ans.push(1)
        stack.push(arr[0])
        positionStack.push(0)
        for(var i = 1; i < n; i++){
            let range
            while(stack[stack.length-1] <= arr[i]){
                stack.pop()
                positionStack.pop()
            }
            // console.log(stack,arr[i])
            if(positionStack.length == 0){
                range = i + 1
            }
            else{
                range = i - positionStack[positionStack.length-1]
            }
            ans.push(range)
            stack.push(arr[i])
            positionStack.push(i)
        }
        console.log(ans.join(" "))
    }  
}  
```


