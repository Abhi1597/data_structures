# **Keep Distincts**

Given a string S. Your task is to remove all duplicates characters from the string S

NOTE: 1.) Order of characters in output string should be same as given in input string. 2.) String S contains only lowercase characters ['a'-'z'].

## Input Format

Input contain a single string S. 

## Constraints

1<=|Length of String|<=100000 

## Output Format

Print the string S with no any duplicate characters.

## Sample Input 0
```
iloveprogramming
```
## Sample Output 0
```
iloveprgamn
```
```javascript
function processData(input) {
    //Enter your code here
    var obj = {}, arr = "", str = ''
    for(var i = 0; i < input.length; i++){
        obj[input[i]] = input[i]
    }
    arr = Object.values(obj)
    for(var i = 0; i < arr.length; i++){
        str+= arr[i]
    }
    console.log(str)
}        
```
