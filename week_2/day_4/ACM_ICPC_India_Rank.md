# ACM ICPC India Rank

[ICPC](https://icpc.baylor.edu/)  is International Collegiate Programming Contest is an algorithmic programming contest for college students. You are provided list of countries in correct ranking. Your task is to write a program that prints the rank of India in ICPC.

### Input Format

First line contains **N** which is number of countries.

Next **N** line contains names of **N** countries in the order of their ranking.

### Constraints

N<100

### Output Format

Output one number which is rank of India in ICPC

### Sample Input 0

```
5
Russia
USA
Japan
China
India
```

### Sample Output 0
```
5
```
Explanation 0
```
Out of the 5 countries, India is at 5th place. Hence, output is 5
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var size = Number(input[0])
    var obj = {}, rank
    for(var i =1; i <=size; i++){
        if(input[i] == 'India'){
            rank = i
            break
        }
    }
    console.log(rank)
}    
```


