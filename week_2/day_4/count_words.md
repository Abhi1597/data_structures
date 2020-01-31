# Count Words

You are given a sentence of words. Your task is to write a program that calculates number of words present in it.

Note: Sentence has just words separated by space (if there is more than one word) and it does not have any other character.

### Input Format

First line contains a sentence of different words separated by space

### Constraints

There can be at most 1000 words in sentence

### Output Format

Output number of different words present in the sentence

### Sample Input 0

```
Transformation in education
```

### Sample Output 0
```
3
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split(' ')
    console.log(input.length)
} 
     
```


