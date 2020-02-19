# Two Strings Problem

A substring is a contiguous sequence of characters within a string. You are given two strings: S1 and S2.

Print "Yes" if S2 is a substring of S1, else print "No"

### Input Format

First line contains S1

Second line contains S2

### Constraints

Length of both strings < 100

### Output Format

Output string based on S1 and S2

### Sample Input 0

```
masai
sai
```

### Sample Output 0
```
Yes
```

```javascript
function processData(input) {
    //Enter your code here
    // Time complexity : O(n^2)
    input = input.split('\n')
    var arr1 = input[0].split(''), obj1 = {}
    var arr2 = input[1].split(''), obj2 = {}
    for(var i = 0; i < arr1.length; i++){
        if(obj1[arr1[i]] == undefined)
            obj1[arr1[i]] = 1
        else
            obj1[arr1[i]]++
    }
    for(var i = 0; i < arr2.length; i++){
        if(obj2[arr2[i]] == undefined)
            obj2[arr2[i]] = 1
        else
            obj2[arr2[i]]++
    }
    function isSubString(){
        var count = 0, mark = 0
        for(key1 in obj2){
            mark++
            for(key2 in obj1){
                if(key1 == key2){
                    if(obj2[key1] > obj1[key2])
                        return "No"
                    else
                        count++
                }
            }
        }
        if(count == mark)
            return "Yes"
        else
            return "No"
    }  
    console.log(isSubString()) 
} 
     
```


