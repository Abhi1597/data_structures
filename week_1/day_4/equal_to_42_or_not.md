# Equal to 42 or not!

You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".

### Input Format

First line contains number of integers N present in the array.

Second line contains N space separated integers.

### Constraints

N<100

### Output Format

Output Yes/No based on condition mentioned above.

```javascript
function processData(input) {
  //Enter your code here
  input = input.split('\n');
  var num = Number(input[0]);
  input = input[1].split(' ');
  var count = 0;
  for (var i = 0; i < num; i++) {
    input[i] = parseInt(input[i]);
    if (input[i] === 42) count++;
  }
  if (count == 0) console.log('No');
  else console.log('Yes');
}
```

```python
# Python
n = int(input())
arr = list(map(int, input().split()))

if 42 in arr:
    print("Yes")
else:
    print("No")

```
