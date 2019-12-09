# Smallest and Largest of all

Given an array, A, of N integers, print the smallest and largest element present in the array
```
**YOU MUST NOT USE ANY BUILT-IN FUNCTION **
```
### Input Format

The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

### Constraints

### N<100

### Output Format

Print 2 integers in different lines where first integer represents the minimum of all elements and second integer represents the maximum of all

### Sample Input 0
```
4
-2 0 8 4
```
### Sample Output 0
```
-2
8
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var count = Number(input[0])
    var arr = input[1].split(' ')
    var largest = Number(arr[0]), smallest = Number(arr[0])
    for(var i = 0; i <= count; i++){
        if(Number(arr[i]) > largest)
            largest = Number(arr[i])
    }
    for(var i = 0; i <= count; i++){
        if(Number(arr[i]) < smallest)
            smallest = Number(arr[i])
    }
    console.log(smallest)
    console.log(largest) 
} 
```

