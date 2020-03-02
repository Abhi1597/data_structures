# Enough Fuel Consumption

You are given the amount of fuel consumed by a car in travelling 1 km. You are also provided total distance the car will be travelling. If the total amount of fuel required by car is greater than 50 litres, print "Enough" (without quotes), else print "Go On" (without quotes).

### Input Format

First line contains a number which is the amount of fuel required by the car in travelling 1 km.

Second line contains total distance the car has to cover.

### Constraints

Both numbers < 1000 

### Output Format

Output one string based on the conditions mentioned above.

### Sample Input 0

```
1 46
```

### Sample Output 0
```
Go On
```

```javascript
function processData(input) {
    //Enter your code here
    // Time complexity: O(1)
    input = input.split(' ')
    var mileage = Number(input[0])
    var distance = Number(input[1])
    if((distance*mileage) > 50){
        console.log("Enough")
    }
    else
        console.log("Go On")
}   
```


