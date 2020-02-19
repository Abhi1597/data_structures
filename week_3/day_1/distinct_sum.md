# Distinct Sum

You are given an array of **N** elements. Your task is to write a program that calculates the sum of all distinct elements present in the array.

### Input Format

First line of input contains **N**

Second line of input contains **N** space separated integers.

### Constraints

N<10000

### Output Format

Output sum of only distinct elements

### Sample Input 0

```
5
2 2 2 1 1
```

### Sample Output 0
```
3
```
Explanation 0
```
There are 5 elements present in the array but only 2 distinct elements (2 and 1)

Hence, sum is 3
```

```javascript
function processData(input) {
    //Enter your code here
    // Time complexity : O(n)
    var obj = {}, sum = 0
    input = input.split('\n')
    var size = Number(input[0])
    var arr = input[1].split(' ').map(function(elem){
        return parseInt(elem)
    })
    for(var i = 0; i < size; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = arr[i]
            sum += arr[i]
        }
    }
    console.log(sum)
}   
```


