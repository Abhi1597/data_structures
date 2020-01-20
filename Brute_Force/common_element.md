# **Common Element**

You are given 2 arrays of **N** integers. Your task is to write a program that finds the one integer which is common in both arrays.

Note: There is always one integer common in both arrays.
## Input Format

First line of input contains **N**

Second line contains **N** space separated integers making the first array

Third line contains **N** space separated integers making the second array

## Constraints

N<1000

## Output Format

Output that one integer which is common in both arrays

## Sample Input 0
```
3
4 5 7
9 2 5
```
## Sample Output 0
```
5
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = parseInt(input[0])
    var arr1 = input[1].split(' ')
    var arr2 = input[2].split(' ')
    for(var i = 0; i < size; i++){
        arr1[i] = parseInt(arr1[i])
        arr2[i] = parseInt(arr2[i])
    }
    
    function common(){
        for(var i = 0; i < size; i++){
            for(var j = 0; j < size; j++){
                if(arr1[i] == arr2[j])
                    return arr1[i]
            }
        }
    }
    console.log(common())  
}         
```
