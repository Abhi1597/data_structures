# Print Odd Characters

Given a string of lowercase characters in range ascii[‘a’..’z’]. You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

### Input Format

First and the only line contains string 

### Constraints

Length of string < 1000

### Output Format

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

### Sample Input 0

```
aaabccddd
```

### Sample Output 0
```
abd
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n)
    // console.log(input)
    var size = input.length
    var arr = input.split(""), str = ""
    // console.log(arr)
    // var pos = 0
    var count = 1
    for(var i = 0; i < size; i++){
        if(arr[i] == arr[i+1]){
            count++
        }
        else{
            if(count%2 != 0){
                str += arr[i]
            }
            else{
                count = 1
            }
        }    
    }
    if(str == "")
        console.log("Empty String")
    else
        console.log(str)  
} 
```


