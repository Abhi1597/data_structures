# Catch that 420!

You are given an integer ***N***. Your task is to find if the string 420 is present in it or not.

Print "Caught" (without quotes) if 420 is present in it. Otherwise "Escaped" (without quotes) if 420 is not present in it.

### Input Format

You are provided an integer ***N***.

### Constraints

### N<1000000

### Output Format

Output an string based on the conditions mentioned above.

### Sample Input 0

```
97420
```

### Sample Output 0
```
Caught
```
Explanation 0
```
97420 contains 420.

Hence output is "Caught"
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var size = input.length
    // console.log(size)
    function test(){
        for(var i = 0; i < size; i++){
        if(input[i] == '4'){
            if(input[i+1] == '2'){
                if(input[i+2] == '0')
                    return "Caught"
                }
            }
        }
        return "Escaped"
    }
    console.log(test())
}  
```
```python
# python
n = str(input())

if "420" in n:
    print("Caught")
else:
    print("Escaped")

```

