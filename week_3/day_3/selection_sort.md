# Selection Sort Problem

You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted. 

```
**USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION**
```

### Input Format

First line of input contains N

Second line of input contains N numbers

### Constraints

N < 500

### Output Format

Output the numbers given after sorting it in increasnig order

### Sample Input 0

```
5
3 5 0 9 8
```

### Sample Output 0
```
0 3 5 8 9
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    input = input.split('\n')
    var size = Number(input[0])
    var arr = input[1].split(' ').map(function(ele){
        return parseInt(ele)
    })
    
    var str = ""
    for(var i = 0; i < size - 1; i++){
        var lowest = i+1
        for(var j = i + 1; j < size; j++){
            if(arr[lowest] > arr[j+1]){
                lowest = j+1
            }
        }
        if(arr[i] > arr[lowest]){
            const temp = arr[lowest]
            arr[lowest] = arr[i]
            arr[i] = temp
        }
    }
    for(var i = 0; i < size; i++)
        str += arr[i] + " "
    console.log(str)
}    
```


