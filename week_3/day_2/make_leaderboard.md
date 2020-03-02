# Make Leaderboard

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

* If two students get same marks they get same rank
* The student placed next to the same marks students will get the rank skipping the intermediate ranks.

Refer to the sample test case for better understanding

### Input Format

First line of input contains **N** Next **N** line contains name and marks respectively of **N** different students (where name and marks is separated by a space)

### Constraints

N < 100

### Output Format

Output N names with their rank. Follow these rules for generating the list:
1. The students having more mark gets better rank
2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)
3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


### Sample Input 0

```
6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45
```

### Sample Output 0
```
1 joy
1 rancho
3 chatur
3 virus
5 raju
6 farhan
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = Number(input[0]), nameArr = [], marksArr = [] 
    for(var i = 1; i <=size; i++){
        var temp = input[i].split(' ')
        nameArr.push(temp[0])
        marksArr.push(Number(temp[1]))
    }
    // console.log(nameArr)
    // console.log(marksArr)
    
    // Sorting in descending order
    for(var i = 0; i < size; i++){
        for(var j = 0; j < size-1; j++){
            if(marksArr[j] < marksArr[j+1]){
                // Swapping numbers
                marksArr[j] = marksArr[j] + marksArr[j+1]
                marksArr[j+1] = marksArr[j] - marksArr[j+1]
                marksArr[j] = marksArr[j] - marksArr[j+1]
                // swapping names
                var temp = nameArr[j]
                nameArr[j] = nameArr[j+1]
                nameArr[j+1] = temp
                // console.log(marksArr, j, j+1)
                // console.log(nameArr)
            }
            // Checking if Marks are equal
            if(marksArr[j] == marksArr[j+1]){
                // Checking order of name
                if(nameArr[j] > nameArr[j+1]){
                    var temp = nameArr[j]
                    nameArr[j] = nameArr[j+1]
                    nameArr[j+1] = temp
                    // console.log(marksArr, j, j+1)
                    // console.log(nameArr)
                }
            }
        }
    }
    var rank = 1
    console.log(rank+" "+ nameArr[0])
    for(var i = 1; i < size; i++){
        if(marksArr[i] == marksArr[i-1])
            console.log(rank +" "+ nameArr[i])
        else{
            rank = i+1
            console.log(rank +" "+ nameArr[i])
        }
    }
    // console.log(marksArr)
}    
```


