# **Subarrays Problem**

You are given an array **A** of **N** elements. Write a program that counts the number of sub-arrays of **A** in which sum of all the elements is an even number.

Please read sample test case and its explanation for better understanding.
## Input Format

First line contains **N** which is the number of elements present in the array.

Second line contains **N** space separated integers which are the elements of array **A**

## Constraints

1 ≤ N ≤ 100000

1 ≤ Elements of array ≤ 1000000

## Output Format

Output one number which is the count of such sub-arrays

## Sample Input 0
```
5
2 5 4 4 4
```
## Sample Output 0
```
7
```
## Explanation 0
```
All the even sum subarrays are:
1) [1,1] (i.e from index 1 to index 1)
2) [3,5] (i.e from index 3 to index 5)
3) [3,4] (i.e from index 3 to index 4)
4) [4,5] (i.e from index 4 to index 5)
5) [3,3] (i.e from index 3 to index 3)
6) [4,4] (i.e from index 4 to index 4)
7) [5,5] (i.e from index 5 to index 5)
```
```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    input = input.split('\n')
    var size = Number(input[0])
    var arr = input[1].split(' ').map(function(ele){
        return parseInt(ele)
    })
    var sumArr = [], sum = 0
    for(var i = 0; i < size; i++){
        sum += arr[i]
        sumArr[i] = sum
    }
    var even = 1, odd = 0, count = 0
    for(var i = 0; i < size; i++){
        if(sumArr[i] % 2 == 0)
            even++
        else
            odd++
    }
    var Even = (even*(even-1))/2
    var Odd = (odd*(odd-1))/2
    console.log(Even+Odd)
}         
```
