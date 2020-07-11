# Longest Repeated Odd

You are given an array A of N integers. Your task is to find the maximum number of times an odd number is repeated in the array.

### Input Format

First line contains N which is the number of element present in the array.

Second line contains N integers which are the values of array.

### Constraints

N<100

### Output Format

Output one integer which the maximum number of times an odd number is repeated in array.

### Sample Input 0
```
12
1 1 1 1 2 2 2 2 2 1 1 1
```
### Sample Output 0
```
4
```
### Explanation 0
```
1 is repeated 4 times from index 0 to index 3 => 4 times

2 is repeated 5 times from index 4 to index 8 => 5 times

1 is repeated 3 times from index 9 to index 11 => 3 times

So, the output is 4 since 1 is odd.
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = parseInt(input[0])
    var arr = input[1].split(' ')
    var max = 0
    for(var i = 0; i < num; i++){
        arr[i] = parseInt(arr[i])
    }
    for(var j = 0; j < num; j++){
        var count = 1
        if((arr[j] % 2 == 1)){
            for(var k = j+1; k < num; k++){
                if(arr[j]==arr[k]){
                    count++
                }
                else{
                    break
                }
            }
            if(max < count){
                max = count
            }
        }
    }
    console.log(max)
} 
```
```python
# Python : O(n)
n = int(input())
arr = list(map(int, input().split()))

index = 0
currCount = 0
maxCount = 0

while index < n:
    if arr[index] % 2 == 1:
        currCount = 1
        index += 1
        while index < n and arr[index] == arr[index-1]:
            currCount += 1
            index += 1
        if currCount > maxCount:
            maxCount = currCount
    index += 1
print(maxCount)
```

