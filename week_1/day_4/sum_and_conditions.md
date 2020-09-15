# Sum and Conditions

You are given an array of **N** integers. Write a program that prints "Greater" (without quote) if the sum of all elements present in the array is greater than 100, else print "Lesser" (without quotes).

### Input Format

First line contains **N**

Second line contains **N** space separated integers which are elements of the array.

### Constraints

N<1000

### Output Format

Output Greater/Lesser depending upon the sum

### Sample Input 0

```
5
21 24 2 54 8
```

### Sample Output 0

```
Greater
```

Explanation 0

```
Since, sum of all elements in array is 109, therefore Greater
```

```javascript
// Javascript
function processData(input) {
  //Enter your code here
  input = input.split('\n');
  var num = parseInt(input[0]),
    sum = 0;
  var arr = input[1].split(' ');
  for (var i = 0; i < num; i++) {
    sum += parseInt(arr[i]);
  }
  if (sum > 100) console.log('Greater');
  else console.log('Lesser');
}
```

```python
# Python
n = int(input())
s = sum(list(map(int, input().split())))

if s > 100:
    print("Greater")
else:
    print("Lesser")

```
