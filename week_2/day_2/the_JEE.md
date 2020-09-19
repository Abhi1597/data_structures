# **The JEE**

JEE is one of the most prestigious exams. You need to implement ranking rule in it. Given marks of Physics, Chemistry and Mathematics of two students, Find out the winner using below rules:

=> If total marks of one student is greater than other, he/she wins

=> If total marks of both the students are same, then the one having more marks in Maths wins. In case their marks in maths are also same, the one whose marks in Physics is more wins the game.

## Input Format

First line of input contains 3 space separated integers which is the marks in physics, chemistry and mathematics respectively of first student

Second line of input contains 3 space separated integers which is the marks in physics, chemistry and mathematics respectively of second student

## Constraints

Marks < 36000

## Output Format

Output "First" (without quotes) if first student wins.

In all other case print "Second"
## Sample Input 0
```
120 90 70
90 80 110
```
## Sample Output 0
```
Second
```
## Explanation 0
```
Both students have equal total marks, that is 280 but second student has more marks in Maths, so he wins (gets better rank)
```
```javascript
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var stud1 = input[0].split(' ')
    var stud2 = input[1].split(' ')
    var sum1 = 0, sum2 = 0
    for(var i = 0; i < 3; i++){
        stud1[i] = parseInt(stud1[i])
        sum1 += stud1[i]
        stud2[i] = parseInt(stud2[i])
        sum2 += stud2[i]
    }    
    
    function winner(){
        if(sum1 > sum2)
            return "First"
        else if(sum1 == sum2){
            if(stud1[2] > stud2[2])
                return "First"
            else if(stud2[2] > stud1[2])
                return "Second"
            else if(stud1[0] > stud2[0])
                return "First"
            else if(stud2[0] > stud1[0])
                return "Second"
            else if(stud1[1] > stud2[1])
                return "First"
            else
                return "Second"
        }
        else
            return "Second"   
    }
    console.log(winner())  
}  
```
```python
# python
first = list(map(int, input().split()))
second = list(map(int, input().split()))

first_sum = sum(first)
second_sum = sum(second)

if first_sum > second_sum:
    print("First")
elif second_sum > first_sum:
    print("Second")
elif first[2] > second[2]:
    print("First")
elif second[2] > first[2]:
    print("Second")
elif first[0] > second[0]:
    print("First")
else:
    print("Second")
```