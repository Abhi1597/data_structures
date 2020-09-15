# Product of array problem

You are given an array of N positive integers. Write a program to output the product of all the elements present in the array.

### Input Format

First line contains N.

Second line contains N space separated integers

### Constraints

N<100

### Output Format

Output one number which is the product of all elements.

### Sample Input 0

```
5
3 5 2 9 4
```

### Sample Output 0
```
1080
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = parseInt(input[0]), product = 1
    input = input[1].split(' ')
    for(var i = 0; i < num; i++){
        product *= parseInt(input[i])
    }
    console.log(product)
}  
```

```python
# Python
n = int(input())
arr = list(map(int, input().split()))

prod = 1
for num in arr:
    prod *= num

print(prod)

```

