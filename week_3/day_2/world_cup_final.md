# World Cup Final

You are given 3 parameters of two different cricket teams in World Cup Final.

First parameter : Score

Second parameter : Score in super over

Third parameter : Total number of fours scored in the inning.

If first parameter of any one team is greater than other then that team wins.

If first parameter of both the teams are same, then the team whose second parameter is greater wins the match.

In case the second parameter is also same, then the team that has higher value of third parameter wins the game.

### Input Format

First line contains the three discussed parameter for New Zealand

Second line contains three discussed parameters for England

### Constraints

All parameters < 10000

### Output Format

Output "England" (without quotes) if England wins the game, else print "New Zealand" if New Zealand wins the game.

### Sample Input 0

```
241 15 21
241 15 26
```

### Sample Output 0
```
England
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n)
    input = input.split('\n')
    var nz = input[0].split(' ').map(Number)
    var eng = input[1].split(' ').map(Number)
    function winnerFinals(){
        for(var i = 0; i < nz.length; i++){
            if(nz[i] > eng[i]){
                return "New Zealand"
            }
            else if(eng[i] > nz[i]){
                return "England"
            }  
        }
    }
    console.log(winnerFinals())
}    
```


