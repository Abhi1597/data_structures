# Maximum Occuring Element

Given an array **A** of **N** integers. Your task is to print that integer which is present maximum number of times in the given array.

If there are two elements present maximum number of times, print the one which is comes first in the array.

### Input Format

First line contains **N**

Second line contains **N** space separated integers which are elements of the array.

### Constraints

N<100
The array contains **integers** only

### Output Format

Print one integer, the one which is present the maximum number of times.

### Sample Input 0

```
5
0 2 0 6 9
```

### Sample Output 0
```
0
```
Explanation 0
```
Since 0 is present the maximum number of times (2 times) => The answer is 0
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = parseInt(input[0]), max = 0 
    var arr = input[1].split(' ')
    var occurance = arr[0]
    for(var i = 0; i < num; i++){
         var count = 0
         for(j = i+1; j < num; j++){
             if(parseInt(arr[i]) == parseInt(arr[j])){
                 count++
             }
         }
        if(max < count){
            max = count
            occurance = arr[i]
        }
    }
    console.log(occurance)
}    
```
```python
# Python
# Best Approach, T(C): O(n)
n = int(input())
arr = list(map(int, input().split()))
di = {}
for a in arr:
    if a not in di:
        di[a] = 1
    else:
        di[a] += 1
count, ele = 1, arr[0]
for k, v in di.items():
    if v > count:
        count = v
        ele = k
print(ele)
    
```

