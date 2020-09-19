# Masai Palindromic Substring

You are provided a string ***S***. Write a programme that returns length of the longest **palindromic** [substring](https://en.wikipedia.org/wiki/Substring) of that string.

### Input Format

You are provided with a string

### Constraints

Length of string < 100

### Output Format

Output one number which is length of the longest substring which is a palindrome

### Sample Input 0
```
thisracecarisgood
```
### Sample Output 0
```
7
```
### Explanation 0
```
The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings. Hence the output is 7
```
```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var str = input
    var size = str.length,count = 1, max = 1
    for(var i = 0; i < size; i++){
        for(var j = i+1; j <=size; j++){
            if(isPalindrome(str.substring(i,j))){
                count = str.substring(i, j).length
                 if(count > max)
                     max = count
            }
        }
    }
    
    function isPalindrome(subStr){
        var len = subStr.length
        for(var i = 0; i < len/2; i++){
            if(subStr[i] != subStr[len-i-1])
                return false
        }
        return true 
    }
    console.log(max)
}   
```
```python
# python
s = str(input())
n = len(s)

max_pal = 1
for i in range(n-1):
    for j in range(i+1, n+1):
        sub = s[i:j]
        if sub == sub[::-1] and len(sub) > max_pal:
            max_pal = len(sub)

print(max_pal)

```
