# Devotion Quotient

There are N different students who have messaged Rahul their doubts. Rahul can reply to just one of them. Every student has a devotion quotient that determines how devoted the student is towards the course. Help Rahul determine the name of student to whom he should reply.

### Input Format

First line of input contains the value of N

Next N line contains name and devotion quotient of N students separated by a space

### Constraints

N < 100

name contains only lowercase alphabets [a-z]

### Output Format

Output one name which is the name of student with highest devotion quotient

### Sample Input 0

```
4
ankit 10
amit 40
shivam 25
shubham 33
```

### Sample Output 0
```
amit
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n)
    input = input.split("\n")
    var size = parseInt(input[0]), arr = [], devotionQuo = [], highest = 0
    for(var i = 0; i < size; i++){
        arr[i] = input[i+1].split(" ")
        devotionQuo[i] = parseInt(arr[i][1])
    }
    
    for(var i = 1; i < size; i++){
        if(devotionQuo[i] > devotionQuo[highest]){
            highest = i
        }
    }
    console.log(arr[highest][0])
}  
```


