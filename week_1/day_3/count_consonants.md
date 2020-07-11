# Count Consonant

You are provided a string S. Your task is to write a programme that counts the number of consonants (non-vowels characters) present in the string.

### Input Format

First line contains a string S

### Constraints

Length of String is always lesser than 1000

### Output Format

Output one number which is the count of number of consonants present in the string.

### Sample Input 0
```
masaischool
```
### Sample Output 0
```
6
```
```javascript
function processData(input) {
    //Enter your code here
    var str = input
    // console.log(str)
    var length = input.length
    // console.log(length)
    var count = 0
    for(var i = 0; i < length; i++){
        if(!(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'))
            count++
    }
    console.log(count)
} 
```
```python
# Python
string = input().strip()
vowel = "aeiou"
count = 0
for char in string:
    if char not in vowel:
        count += 1
print(count)
    
```