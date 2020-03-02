# Masai Uniqueness

You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).

If it has just unique character, output "Unique"

Else in all other cases, output "No"

### Input Format

First and the only line contains string S

### Constraints

Length of S < 1000

### Output Format

Output one string based on string

### Sample Input 0

```
masai
```

### Sample Output 0
```
No
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n)
    var size = input.length, obj = {}
    function isUnique(){
        for(var i = 0; i < size; i++){
            if(obj[input[i]] == undefined)
                obj[input[i]] = 1
            else
                return "No"
        }
        return "Unique"
    }
    console.log(isUnique())
}     
```


