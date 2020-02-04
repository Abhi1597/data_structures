# **Apply Brakes**

You are given the distance travelled by a car(in kilometres) in certain time (in hours). If the speed of that car is greater than 40 km/hr, you have to print "Apply Brake" (without quotes), else in all other conditions, print "Keep Going" (without quotes)

## Input Format

First line contains 2 space separated integers whers first integer represents the distance travelled by car and second represents time taken to cover that distance.

## Constraints

Distance < 1000 time taken < 5

## Output Format

Ouput a string depending on the speed of car

## Sample Input 0
```
100 2
```
## Sample Output 0
```
Apply Brake
```
```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(1)
    var arr = input.split(' ').map(function(element){
        return parseInt(element)
    })
    if(Math.floor(arr[0]/arr[1]) > 40)
        console.log("Apply Brake")
    else
        console.log("Keep Going")
}          
```
