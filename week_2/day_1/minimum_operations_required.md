# **Minimum Operations Required**

You are given an array of **n** integers. You have to equalize all elements of the array in minimum possible operation.

In ONE operation, you can increase any of the **n-1** elements of the array by **1**. That is, except for one element of the array, you can increment all other integers by 1.

Output the minimum number of operations required to equalize all elements of array.
## Input Format

First line contains n

Second line contains n space separated integers which are elements of array

## Constraints

n<1000

## Output Format

Output one number, which is the minimum number of operations required to perform in order to make all the elements of array equal

## Sample Input 0
```
3
1 2 3
```
## Sample Output 0
```
3
```
## Explanation 0
```
In operation 1, you can increment 1st and 2nd element and array becomes [2,3,3]
In operation 2, you can increment 1st and 3rd element and array becomes [3,3,4]
In operation 3, you can increment 1st and 2nd element and array becomes [4,4,4]

Therefore, at least 3 operations are required atleast
```
```javascript
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = Number(input[0]), sum = 0
    var arr = input[1].split(' ').map(function(ele){
        return parseInt(ele)
    })
    var lowest = arr[0]
    for(var i = 0; i < size; i++){
        sum += arr[i]
        if(arr[i] < lowest)
            lowest = arr[i]
    }
    var steps = sum - (lowest*size)
    console.log(steps)
} 
```
```python
# python
n = int(input())
arr = list(map(int, input().split()))

operations = sum(arr) - (min(arr)*n)  # ArraySum - (minimum_element * size(Array))
print(operations)

```