# Compete with Neighbour

You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.

### Input Format

First line of input contains N which is the number of elements present in the array.

Second line contains N integer which are the elements of the array A.

### Constraints

N<100

There will always be at least 2 elements

### Output Format

Output one integer which is the count of such occurences.

### Sample Input 0
```
8
1 2 3 4 2 1 6 5
```
### Sample Output 0
```
2
```
### Explanation 0

In this case, 4 is bigger than both its neighbour 3 and 2. Similarly 6 is bigger than both its neighbour 5 and 1. So, the answer is 2.

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var count = 0
    input = input.split('\n')
    var num = parseInt(input[0])
    var arr = input[1].split(' ')
    for(var i = 0; i < num; i++){
        arr[i] = parseInt(arr[i])
    }
    if(arr[0] > arr[1])
        count++
    if(arr[num-1] > arr[num-2])
        count++
    for(i = 1; i < num-1; i++){
        if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1]))
            count++   
    }
    console.log(count)  
} 
```

```python
# Python
n = int(input())
arr = list(map(int, input().split()))
arr.insert(0, -10**9)
arr.append(-10**9)
count = 0
for i in range(1, n+1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        count += 1
print(count)
```

