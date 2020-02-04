# **Simple Challenge**

Given an array 'A' consisting of 'n' integers, find the maximum value of the following expression:
```
|Ai - Aj| + |i - j|
```
where, 0<= i,j < n and Ai, Aj are the Array elements.

## Input Format

First line of input contains an integer T denoting number of test cases.

Each test case contains two lines, first line contains integer n where n is the number of elements in array

Second line contains n space separated integers Ai.

## Constraints

```
1<=T<=100
1<=n<=100000
0<=Ai<=100000
```

## Output Format

Print the maximum value of the above give expression, for each test case separated in a new line.

## Sample Input 0
```
2
3
1 1 1
4
1 2 3 1
```
## Sample Output 0
```
2
4
```
## Explanation 0
```
For the first sample case, if we choose i=0 and j=2; then we get the maximum value as 2.

In the second test case, if we choose i=0 and j=2, the we get the maximum value as 4.
```

```javascript
function processData(input) {
    //Enter your code here
    // Very Important Interview Question
    // Time Complexity : O(n)
    input = input.split("\n")
    var testCases = Number(input[0])
    var lineNo = 1
    
    for(var i = 0,lineNo ; i < testCases; i++, lineNo+=2){
        var size = Number(input[lineNo])
        var arr = input[lineNo+1].split(" ").map(function(ele){
            return parseInt(ele)
        })
        // console.log(arr)
        simpleDifference(arr, size)
    }
    
    // Finding the max for the 3 possible cases
    function simpleDifference(arr, n){
        var ans1 = findMax1(arr,n)
        var ans2 = findMax2(arr,n)
        var ans3 = findMax2(arr,n)
        console.log(Math.max(ans1, ans2, ans3))
    }
    
    // Finding X-Y for all the arrays
    function diff(arr, n){
        var low = arr[0], high = arr[0]
        for(var i = 1; i < n; i++){
            if(arr[i] < low){
                low = arr[i]
            }
            if(arr[i] > high){
                high = arr[i]
            }
        }
        return (high-low)
    }
    
    // Making an array for Case1
    function findMax1(arr, n){
        var sumArr = []
        for(var i = 0; i < n; i++){
            sumArr.push(arr[i] + i)
        }
        // console.log(sumArr, "firstArr")
        return diff(sumArr, n)
    }
    
    // Making an array for Case2
    function findMax2(arr, n){
        var sumArr = []
        for(var i = 0; i < n; i++){
            sumArr.push(arr[i] - i)
        }
        // console.log(sumArr, "secondArr")
        return diff(sumArr, n)
    }
    
    // Making an array for Case3
    function findMax3(arr, n){
        var sumArr = []
        for(var i = 0; i < n; i++){
            sumArr.push(i - arr[i])
        }
        // console.log(sumArr, "thirdArr")
        return diff(sumArr, n)
    }  
}             
```
