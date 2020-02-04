# **Two Strings & Permutation**

You are given two strings S1 and S2 of equal number of characters. Your task is to comment if any permutation of one string can form other or not.

If it is possible, print "Yes" (without quotes)

If it is not possible, print "No" (without quotes)

## Input Format

Input contains 2 lines

First line contains string **S1**

Second line contains string **S2**

## Constraints

Length of both string < 1000

## Output Format

Output Yes/No based on condition met

## Sample Input 0
```
amit
mtia
```
## Sample Output 0
```
Yes
```
```javascript
function processData(input) {
    //Enter your code here
    // Using Objects
    const verbose = 0
    input = input.split('\n')
    var arr1 = input[0].split(' ').join("").split("")
    var arr2 = input[1].split(' ').join("").split("")
    const n = arr1.length
    if(verbose)
        console.log(arr1, arr2)
    var obj1 = {}, obj2 = {}
    for(let i = 0; i < n; i++){
        if(obj1[arr1[i]] == undefined)
            obj1[arr1[i]] = 1
        else
            obj1[arr1[i]]++
        
        if(obj2[arr2[i]] == undefined)
            obj2[arr2[i]] = 1
        else
            obj2[arr2[i]]++
    }
    if(verbose)
        console.log(obj1, obj2)
    var flag = true
    for(key in obj1){
        if(obj1[key] != obj2[key]){
            flag = false
            break
        }
    }
    if(flag)
        console.log("Yes")
    else
        console.log("No")   
} 
```
