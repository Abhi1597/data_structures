# **Batsmen Score**

You are given the numbers of 1 runs, 2 runs, 3 runs, fours and sixes scored by a batsman. Your task is to compute total run scored by that batsman.

## Input Format

First line contains 5 positive space separated integers which represents number of 1s, 2s, 3s, fours and sixes scored by the batsman.

## Constraints

All the scores<100

## Output Format

Output total run scored by the batsman

## Sample Input 0
```
12 8 5 6 3
```
## Sample Output 0
```
85
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split(' ')
    var arr = input.map(Number)
    var sum = arr[0]*1 + arr[1]*2 + arr[2]*3 + arr[3]*4 + arr[4]*6 
    console.log(sum)
}        
```
