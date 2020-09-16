# Odd Sum Below N

You are given a number **N**, find sum of all odd numbers present below it. (including N if N is an odd number)

### Input Format

First and the only line contains number **N**

### Constraints

N<100000

### Output Format

Output the sum of all such numbers

### Sample Input 0

```
7
```

### Sample Output 0

```
16
```

```javascript
function processData(input) {
  //Enter your code here
  var num = parseInt(input),
    sum = 0;
  for (var i = 0; i <= num; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  console.log(sum);
}
```

```python
# Python
n = int(input())
s = 0

if n < 1:
    print(s)
else:
    for i in range(1, n+1, 2):
        s += i
    print(s)

```
