# Help Elevator

You are programming an elevator that allows only persons with weight less than 85 to enter it, otherwise it beeps. You are provided weight of **n** persons in form of an array. Your task is to print either **Beep** or **Enter** depending on weight of person.

Effectively, write a program that iterates through an array of n elements and prints "Beep" (without quote) in a new line if weight is greater than or equal to 85, otherwise print "Enter" (without quote).

### Input Format

First line contains **N** which is the number of elements present in the array.

Second line contains **N** space separated integers.

### Constraints

N<100

### Output Format

Output **N** strings (either Beep or Enter depending on the value present)

### Sample Input 0

```
5
24 83 89 43 91
```

### Sample Output 0

```
Enter
Enter
Beep
Enter
Beep
```

```javascript
function processData(input) {
  //Enter your code here
  input = input.split('\n');
  var num = parseInt(input[0]);
  var arr = input[1].split(' ');
  for (var i = 0; i < num; i++) {
    if (parseInt(arr[i]) < 85) {
      console.log('Enter');
    } else {
      console.log('Beep');
    }
  }
}
```

```python
# Python
n = int(input())
arr = list(map(int, input().split()))

for num in arr:
    if num < 85:
        print("Enter")
    else:
        print("Beep")

```
