# The Ashes!(But One day)

You are given two numbers where first number is score of Australian team and second number is score of England.

Comment who wins the match.

If match ends in a tie, print "Tie" (without quotes), else print the name of Winner

### Input Format

First and the only line contains 2 space separated integers denoting scores of Australia and England respectively.

### Constraints

Both score <450

### Output Format

Output one string(either Australia or England) which is the name of Winning team

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var aus, eng
    var arr = input.split(' ')
    aus = parseInt(arr[0])
    eng = parseInt(arr[1])
    if(aus > eng){
        console.log("Australia")
    }
    else if(aus < eng){
        console.log("England")
    }
    else{
        console.log("Tie")
    }
} 
```

```python
# Python
aus, eng = input().split(" ")
if int(aus) > int(eng):
    print("Australia")
elif int(eng) > int(aus):
    print("England")
else:
    print("Tie")
```
