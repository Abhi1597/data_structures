# **Your First Maze Problem**

Sarvagaya is trapped in maze. The Masai command center sent him a string which decodes to come out from the maze. He is initially at (0, 0). String contains L, R, U, D denoting left, right, up and down. In each command he will traverse 1 unit distance in the respective direction.

For example if he is at (2, 0) and the command is L he will go to (1, 0).

## Input Format

Input contains a single string.

## Constraints

Length of string <200

## Output Format

Print the final point where he came out.

## Sample Input 0
```
LLRDDR
```
## Sample Output 0
```
0 -2
```
```javascript
// Javascript
function processData(input) {
    //Enter your code here
    var size = input.length
    var x = 0, y = 0;
    for(var i = 0; i < size; i++){
        switch(input[i]){
            case 'L' : x--
                        break;
            case 'R' : x++
                        break;
            case 'D' : y--
                        break;
            case 'U' : y++
                        break;
        }
    }
    console.log(x,y)
}   
```
```python
# python
x, y = 0, 0
command = str(input())

for d in command:
    if d == "L":
        x -= 1
    elif d == "R":
        x += 1
    elif d == "D":
        y -= 1
    else:
        y += 1

print(x, y)

```