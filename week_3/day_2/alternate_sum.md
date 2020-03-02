# Alternate Sum

You are given an array of **N** integers. Your task is to write a program that calculates the sum of all alternate elements starting from the first(0th index element of array) integer.

### Input Format

First line contains **N**

Second line contains **N** space separated integers

### Constraints

N<1000

### Output Format

Output the sum under above conditions

### Sample Input 0

```
7
4 5 5 5 6 6 7
```

### Sample Output 0
```
22
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = Number(input[0]), sum = 0
    var arr = input[1].split(' ').map(function(ele){
        return Number(ele)
    })
    for(var i = 0; i < size;i+=2){
        sum += arr[i]
    }
    console.log(sum)
}   
```


