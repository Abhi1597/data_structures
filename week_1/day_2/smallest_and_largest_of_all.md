# Smallest and Largest of all

Given an array, A, of N integers, print the smallest and largest element present in the array
```
**YOU MUST NOT USE ANY BUILT-IN FUNCTION **
```
### Input Format

The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

### Constraints

N<100

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
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = parseInt(input[0])
    var arr = input[1].split(' ')
    var smallest = arr[0]
    var largest = arr[0]
    for(var i =0; i < num; i++){
        if(parseInt(arr[i]) < smallest)
            smallest = arr[i]
        if(parseInt(arr[i]) > largest)
            largest = arr[i]
    }
    console.log(smallest)
    console.log(largest)
} 
```

```python
# Python
n = int(input())
arr = list(map(int, input().split()))
smallest, largest = arr[0], arr[0]

for a in arr:
    if a < smallest:
        smallest = a
    elif a > largest:
        largest = a
print(smallest)
print(largest)
```

