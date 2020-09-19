# Detect Palindrome

Given an integer, print "Yes" (without quotes) if that integer is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome) , else print "No" (without quotes)

### Input Format

You are provided with one integer.

### Constraints

Provided integer is always lesser than 1000000

### Output Format

Print Yes or No depending upon the integer.

### Sample Input 0

```
1221
```

### Sample Output 0

```
Yes
```

### Explanation 0

```
Reading 1221 from either side is same, so Yes, it is a palindrome.
```

```javascript
// Javascript
function processData(input) {
  //Enter your code here
  var num = input,
    rev = [];
  var size = num.length;
  for (var i = 0, j = size - 1; i < size; i++, j--) {
    rev[i] = num[j];
  }
  function isPalindrome() {
    for (var i = 0; i < size; i++) {
      if (rev[i] != num[i]) {
        return 'No';
      }
    }
    return 'Yes';
  }
  console.log(isPalindrome());
}
```

```python
# python
arr = str(input())
def pal(num, i, j):
    if i >= j:
        return "Yes"
    elif num[i] != num[j]:
        return "No"
    else:
        return pal(num, i+1, j-1)


print(pal(arr, 0, len(arr)-1))

```
