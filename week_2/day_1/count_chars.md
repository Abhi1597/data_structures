# Count Chars

You are provided a string **_S_**. Your task is to print a string which also contains the number of times that character is repeated. (Read explanation of test case for better understanding)

### Input Format

First and the only line contains the string **_S_**.

### Constraints

Length of S is always lesser than 100

### Output Format

Output one string.

Read sample test case and explanation for better understanding.

### Sample Input 0

```
aaabbbbcc
```

### Sample Output 0

```
a3b4c2
```

### Explanation 0

```
In the given string, character 'a' is repeated 3 times.=>a3

Character 'b' is repeated 4 times =>b4

Character 'c' is repeated 2 times =>c2

So, you have to print "a3b4c2" (without quotes).
```

### Sample Input 1

```
aaabbbcccaaa
```

### Sample Output 1

```
a3b3c3a3
```

```javascript
// Javascript
function processData(input) {
  //Enter your code here
  var str = input;
  var size = str.length,
    countStr = '';
  for (var i = 0; i < size; i++) {
    countStr += str[i];
    var count = 1;
    for (var j = i + 1; i < size; j++) {
      if (str[i] != str[j]) {
        break;
      }
      if (str[i] == str[j]) {
        count++;
        i++;
      }
    }
    countStr += count;
  }
  console.log(countStr);
}
```

```python
# python
s = str(input())

count = 1
result = ""
for i in range(1, len(s)):
    if s[i] != s[i-1]:
        result += s[i-1] + str(count)
        count = 1
    else:
        count += 1

result += s[-1] + str(count)
print(result)

```
