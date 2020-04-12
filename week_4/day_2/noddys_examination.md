# Noddy's Examination

Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than X . Now the rules are-

Score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.

Student is allowed to skip just "one" question that will not be counted in the continuity of the questions.

Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from first question.

Given the number of Questions, N ,the maximum difficulty level of the problem Noddy can solve , X ,and the difficulty level of each question in the form of an array

Determine the maximum score that Noddy can score?

### Input Format

First Line contains Integer N , the number of questions and the maximum difficulty X Noddy can solve.

Next line contains N integers, denoting the difficulty level of each question.

### Constraints

N <= 100000

X <= 1000000000

Difficulty level of each question <= 1000000000

### Output Format

Print the maximum score that Noddy can score

### Sample Input 0

```
7 6
4 3 7 6 7 2 2
```

### Sample Output 0
```
3
```

### Explanation 0
```
In this example, maximum difficulty = 6, Noddy solves question 0 and 1, but skips the question 2 as A[2]>6. Monk then solves the question 3 , but stops at 4 because A[4]>6 and question 2 was already skipped. As 3 questions (0,1 and 3) were solved and 2 questions (2 and 4) have been skipped, therefore we print "3".
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    input = input.split("\n")
    var given = input[0].split(" ")
    var n = Number(given[0]), arr = []
    var maxDiff = Number(given[1])
    // console.log(n, maxDiff)
    input = input[1].split(" ")
    for(var i = 0; i < n; i++){
        arr[i] = Number(input[i])
    }
    // console.log(arr)
    var count = 0, skip = 0, max = 0
    for(var i = 0; i < n; i++){
        if(arr[i] <= maxDiff){
            count++
            // console.log(count)
        }
        else{
            skip++
            if(skip > 1){
                if(count > max){
                    max = count
                }
                break;
                // console.log(max, "-------")
            }
            else{
                continue
            }
        }
        if(count > max){
            max = count
        }
    }
    console.log(max)  
} 
```


