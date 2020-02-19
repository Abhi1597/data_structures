# Anagram Detector

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

Given 2 phrases, write a program that detects if both are anagrams of each other.

If both are anagrams, print "True"

Else print "False"

### Input Format

First line of input contains first phrase

Second line of input contains second phrase

### Constraints

Length of each phrase < 1000

### Output Format

Output a string based on conditions mentioned above

### Sample Input 0

```
anagram
nag a ram
```

### Sample Output 0
```
True
```

```javascript
// Method 1
function processData(input) {
    //Enter your code here
    // Time complexity : O(n^2)
    var str1 = "", str2 = ""
    input = input.split('\n')
    var str1 = input[0], str2 = input[1], obj1 = {}, obj2 = {}
    for(var i = 0; i < str1.length; i++){
        if(str1[i] != " "){
            if(obj1[str1[i]] == undefined)
                obj1[str1[i]] = 1
            else
                obj1[str1[i]]++
        }
    }
    for(var i = 0; i < str2.length; i++){
        if(str2[i] != " "){
            if(obj2[str2[i]] == undefined)
                obj2[str2[i]] = 1
            else
                obj2[str2[i]]++
        }
    }
    function isAnagram(){
        var count = 0, mark = 0
        for(key1 in obj1){
            mark++
            for(key2 in obj2){
                if(key1 == key2){
                    if(obj1[key1] != obj2[key2])
                        return "False"
                    else
                        count++
                    break
                }
            }
        }
        if(count == mark)
            return "True"
        else
            return "False"
    }
    console.log(isAnagram())  
} 

// Method 2
function processData(input) {
    //Enter your code here
    // Time complexity : O(n)
    var str1 = [], str2 = []
    input = input.split('\n')
    str1 = input[0]
    str2 = input[1]
    var arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // console.log(str1)
    // console.log(str2)
    
    for(let i = 0; i < str1.length; i++){
        let temp = str1.charCodeAt(i)
        if(temp == 32){
            continue
        }
        temp = temp - 97
        arr1[temp]++
    }
    // console.log(arr1)
    
    for(let i = 0; i < str2.length; i++){
        let temp = str2.charCodeAt(i)
        if(temp == 32){
            continue
        }
        temp = temp - 97
        arr2[temp]++
    }
    // console.log(arr2)
    
    function isEqual(){
        for(let i = 0; i < 26; i++){
            if(arr1[i] != arr2[i]){
                return "False"
            }
        }
        return "True"
    }
    console.log(isEqual())    
} 

     
```


