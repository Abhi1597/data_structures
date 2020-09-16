# Masai Airline

You are working for Masai Airline. There are **n** passengers with 2 bags each (one check-in and other hand bag). The limitation for check-in bag is 15kgs and that for hand bag is 7kgs. You are given 2 arrays: First array contains weight of check-in bag of ith passenger. Similarly, second array contains weights of hand bag of ith passenger. Print "Boarding" (without quotes) if the passenger clears both luggage weight limits of Masai Airline, else print "Stop" (without quotes).

Please note that 15 kgs and 7 kgs are inclusive.
### Input Format

First line contains **n** (number of passengers)

Second line contains **n** positive integers which are the weights of check-in bag of ith passenger.

Third line contains **n** positive integers which are the weights of hand bag of ith passenger.
### Constraints

n<1000

### Output Format

Output "Boarding" (without quotes) or "Stop" (without quotes) of the passenger meets criteria of Masai Airlines.

### Sample Input 0

```
4
12 14 15 6
8 5 7 4
```

### Sample Output 0
```
Stop
Boarding
Boarding
Boarding
```
Explanation 0
```
Since, the hand bag of first person is 8kgs (greater than 7kgs), therefore stopped.
```

```javascript
function processData(input) {
    //Enter your code here
    input = input.split('\n')
    var num = Number(input[0])
    var checkIn = input[1].split(' ')
    var hand = input[2].split(' ')
    for(var i = 0; i < num; i++){
        checkIn[i] = Number(checkIn[i])
        hand[i] = Number(hand[i])
        if(checkIn[i] <= 15 && hand[i] <= 7){
            console.log("Boarding")
        }
        else
            console.log("Stop")
    }
} 
```
```python
# Python
n = int(input())
checkin_bags = list(map(int, input().split()))
hand_bags = list(map(int, input().split()))

for i in range(n):
    if checkin_bags[i] > 15 or hand_bags[i] > 7:
        print("Stop")
    else:
        print("Boarding")

```

