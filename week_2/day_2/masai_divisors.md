# **Masai Divisors**

You are provided 3 integers: *left, right and k*. Your task is to write a program that finds out count of all such numbers between *left and right* (both inclusive) which are divided by *k*.

## Input Format

First line contains 3 space separated integers which are left, right and k respectively.

## Constraints

l,r,k<10000

## Output Format

Output the count of such numbers

## Sample Input 0
```
1 10 1
```
## Sample Output 0
```
10
```
```javascript
// Javascript
function processData(input) {
    //Enter your code here
    input = input.split(' ')
    var left = parseInt(input[0])
    var right = parseInt(input[1])
    var k = parseInt(input[2])
    var count = 0
    for(var i = left; i <= right; i++){
        if(i % k == 0)
            count++
    }
    console.log(count)
}    
```
```python
# python
left, right, k = map(int, input().split())
count = 0
for i in range(left, right+1):
    if i % k == 0:
        count += 1

print(count)

```