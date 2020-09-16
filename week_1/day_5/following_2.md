# Following 2!

You are given **N** integers, your task is to write a program that finds the integer present after 2 in the sequence of numbers given. In case 2 is not present or 2 is the last element, print -1.

### Input Format

First line of the input contains **N**

Second line of the input contains **N** space separated integers.

### Constraints

N<10000

### Output Format

Output number present after 2.

In case there's no number present after 2, print -1

### Sample Input 0

```
5
3 4 2 0 1
```

### Sample Output 0
```
0
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = parseInt(input[0])
    var arr = input[1].split(' ')
    for(var i = 0; i < num; i++){
        arr[i] = parseInt(arr[i])
    }
    function follow(arr){
        if(arr[num - 1] == 2){
            return -1
        }
        for(var i = 0; i < num - 1; i++){
            if(arr[i] == 2){
                return arr[i+1]
            }
        }
        return -1
    }
    console.log(follow(arr))  
}      
```
```python
# Python
n = int(input())
arr = list(map(int, input().split()))

follow = -1
for i in range(n):
    if arr[i] == 2 and i != (n-1):
        follow = arr[i+1]
        break

print(follow)

```

