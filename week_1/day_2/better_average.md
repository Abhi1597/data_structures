# Better average

You are given scores of last N matches of two different batsmen in form of arrays. Your task is to print the ceil value of better average among the two in case that value is even. If that value is not even, print -1.

### Input Format

First line contains the number of matches N.

Second line contains N space separated integers describing scores of first batsman. Third line contains N space separated integers descibing scores of second batsman.

### Constraints

N<100

### Output Format

Print an integer which can either be ceil of better average of the two batsmen or -1 depending upon the ceil of better average.

### Sample Input 0
```
3
10 20 30
40 80 60
```
### Sample Output 0
```
60
```
### Explanation 0
```
Here, the number of matches is 3. And average of first batsman is 20 while average of second batsman is 60. Since 60>20 and 60 is also even, 60 is the output. 
```

```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var score1 = 0, score2 = 0, avg1, avg2
    input = input.split('\n')
    var count = Number(input[0])
    var batsmen1 = input[1].split(' ')
    var batsmen2 = input[2].split(' ')
    for(var i = 0; i < count; i++){
        score1 += Number(batsmen1[i])
        score2 += Number(batsmen2[i])
    }
    avg1 = Math.ceil(score1/count)
    avg2 = Math.ceil(score2/count)
    if(avg1 > avg2 && (avg1 % 2 == 0)){
         console.log(avg1)
    }
    else if(avg1 < avg2 && (avg2 % 2 == 0)){
             console.log(avg2)
    }
    else if(avg1 == avg2 && (avg2 % 2 == 0)){
             console.log(avg2)
    }
    else{
        console.log("-1")
    }  
} 
```

```python
# Python
import math
n = int(input())
batsmen_1 = list(map(int, input().split()))
batsmen_2 = list(map(int, input().split()))
avg1 = math.ceil(sum(batsmen_1) / n)
avg2 = math.ceil(sum(batsmen_2) / n)

if avg1 >= avg2 and avg1 % 2 == 0:
    print(avg1)
elif avg2 > avg1 and avg2 % 2 == 0:
    print(avg2)
else:
    print(-1)
```