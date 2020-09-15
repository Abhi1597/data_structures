# Three Max, Three Min Please

Given an array of **N** integers, print the 3 **distinct** maximum and 3 **distinct** minimum elements of the array.

### Input Format

First line contains **N**

Second line contains **N** space separated integers which are elements of the array.

### Constraints

0<=N<=100 **(Please note that N can be 0 as well)**

The values present in the array can be negative as well.

### Output Format

In first line, print least 3 values (sorted) present in the array. In second line, print the top 3 values (sorted) present in the array.

In case there are not 3 min value, print "Not Possible" (without quotes).

In case there are not 3 max value, print "Not Possible" (without quotes).

So, according to above statements, if both are not possible, you have to print "Not Possible" twice (once for each)

### Sample Input 0

```
8
1 2 3 4 2 1 6 5
```

### Sample Output 0
```
1 2 3
4 5 6
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n^2)
    // Spliting the input into 2 arrays
    input = input.split('\n')
    var num = parseInt(input[0])
    var temp = [], uniqueArr = [], temp = [], low = "", high = "", reverse = []
    var arr = input[1].split(' ')

    // Converting Strings to numbers
    for(var z = 0; z < num; z++){
        arr[z] = Number(arr[z])
    }

    // Sorting the array in ascending order
    for(var i = 0; i < num; i++){
        for(var j = i+1; j < num; j++){
            if(arr[i] > arr[j]){
                temp[i] = arr[i]
                arr[i] = arr[j]
                arr[j] = temp[i]
            }
        }
    }    
    // console.log(arr)
    // Removing duplicates from the array
    for(var i = 0; i < num; i++){
        for(var j = i+1; j < num; j++){
            if(arr[i] == arr[j]){
                arr[j] = null
            }
        }   
        if(arr[i] != null)
            uniqueArr.push(arr[i])
    }
    var len = uniqueArr.length
    // console.log(uniqueArr)

    // Creating an array with 3 distinct minimum elements
    function lowest(){
        if(uniqueArr.length < 3){
            return "Not Possible"
        }
        for(var i = 0; i < 3; i++){
            low += uniqueArr[i]
            low += " "
        }
        return low
    }

    // Creating an array with 3 distinct maximum elements
    function highest(){
        if(uniqueArr.length < 3){
            return "Not Possible"
        }
        for(var i = len - 1, j = 0; i > len - 4; i--, j++){
            reverse[j] = uniqueArr[i]
        }
        for(var i = 2; i >=0; i--){
            high += reverse[i]
            high += " "
        }
        return high
    }

    console.log(lowest())
    console.log(highest())
}     
```
```python
# Python
# C(T): O(n)
n = int(input())
arr = list(map(int, input().split()))

di = {}
unique = []
for num in arr:
    if num not in di:
        di[num] = 1
        unique.append(num)

if len(di) < 3:
    print("Not Possible")
    print("Not Possible")
else:
    unique.sort()
    print(*unique[0:3])
    print(*unique[-3:])
    
```

