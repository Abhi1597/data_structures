# Count such pairs

You are given an array A of N integers along with a target integer. Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.

### Input Format

First line contains 2 integers: N and the target respectively.

Second line contains N integers which are the elements of array.

### Constraints

N<100

### Output Format

Print one number which is number of such pairs.

### Sample Input 0
```
5 9
3 0 6 2 7
```
### Sample Output 0
```
2
```
### Explanation 0
```
There are two such pairs available whose sum equals to  9. 

Such pairs are (3,6) and (2,7)

Hence the answer is 2
```
```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var arr = input[1].split(' ')
    input = input[0].split(' ')
    var num = parseInt(input[0])
    var sum = parseInt(input[1])
    var count = 0
    for(var i = 0; i < num; i++){
        for(var j = i+1; j< num; j++){
            if((Number(arr[i])+Number(arr[j])) == sum){
                count++
            }
        }
    }
    console.log(count)
} 

```
```python
# Python
n, target = map(int, input().split())
arr = list(map(int, input().split()))
count = 0

for i in range(n-1):
    for j in range(i+1, n):
        if (arr[i] + arr[j]) == target:
            count += 1
print(count)
```