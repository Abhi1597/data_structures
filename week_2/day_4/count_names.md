# **Count Names**

You are provided with **N** names, your task is to write a code that prints the name along with number of times it is present separated by space. (See sample test case for better understanding)

## Input Format

First line contains **N** which is the number of words present.

Next **N** lines contain **N** names (which can be repeating)

## Constraints

**N<100**

## Output Format

Output each name in a sorted manner along with number of times it is present in the list of names.

## Sample Input 0
```
3
masai
school
masai
```
## Sample Output 0
```
masai 2
school 1
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = Number(input[0]), arr = [], obj = {}, str = ""
    for(var i = 0; i < size; i++){
        arr[i] = input[i+1]
    }
    arr.sort()
    // console.log(arr)
    for(var i = 0; i < size; i++){
        if(obj[arr[i]] == undefined){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]]++
        }
    }
    // console.log(obj)
    for(key in obj){
        str += key + " " + obj[key] + "\n"
    }
    console.log(str)
}         
```
