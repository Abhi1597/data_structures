# **Tic Tac toe Winner**

```
You are given a 3*3 matrix (2 dimensional array) that represents the final situation of a Tic Tac Toe. 

You task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', print 'x'(without quotes).

If the winner is 'o', print 'o' (without quotes)

In case the match ended in a tie, print "Tie" (without quotes)
```
## Input Format

Input contains 3 lines where each line has 3 space separated characters which represents final status of tic tac toe

## Constraints

Input contains either of the 2 alphabets: 'x' and 'o'

## Output Format

Print Tie/x/o depending on the end result of game

## Sample Input 0
```
x o x
o x x
o o o
```
## Sample Output 0
```
o
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var arr = []
    for(var i = 0; i < 3; i++){
        arr.push(input[i].split(' '))
    }
    
    function ticTacToe(){
        var j = 0, i = 0
        for(i; i < 3; i++){
            if(arr[i][j] == arr[i][j+1] && arr[i][j]== arr[i][j+2]){
                return arr[i][j]
            }
        }
        i = 0, j = 0
        for(j; j < 3; j++){
            if(arr[j][i] == arr[i+1][j] && arr[j][i]== arr[i+2][j]){
                return arr[j][i]
            }
        }
        i = 0, j = 0
        if(arr[i][j] == arr[i+1][j+1] && arr[i][j] == arr[i+2][j+2])
            return arr[i][j]
        
        i = 0, j = 2
        if(arr[i][j] == arr[i+1][j-1] && arr[i+2][j-2])
            return arr[i][j]   
    }
    
    console.log(ticTacToe())      
}       
```
