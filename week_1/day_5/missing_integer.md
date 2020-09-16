# Missing Integer

You are given an array of **N-1** integers and integers are in the range of 1 to **N**. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer

### Input Format

The first and only line contains **N-1** integers

### Constraints

**N<100**

### Output Format

Print the one number belonging from 1 to **N** which is not present in the array

### Sample Input 0

```
4 5 1 3
```

### Sample Output 0
```
2
```

```javascript
function processData(input) {
    //Enter your code here
    str = input.split(' ')
    var num = str.length +1
    for(var i = 1; i <= num; i++){
        var count = 0
        for(var j = 0; j < num -1; j++){
            if(i == str[j]){
                count++
            }
        }
        if(count == 0)
            console.log(i)
    }
} 
     
```
```python
# Python
# C(T) = O(N)
arr = list(map(int, input().split()))
n = len(arr) + 1

missing = (n*(n+1) // 2) - sum(arr)
print(missing)


```

