# **Manage Forum Mall Parking**

Assume forum mall has **_K_** parking slots and in the next 24 hours there are many vehicles that are going to visit the mall. Luckily, you know the arrival and departure time of each vehicle coming to visit the mall. You are the parking manager of forum and you want to maintain the reputation of Forum mall. Since you know the arrival and departure time of each vehicle and also number of parking slots that you have, comment if it is possible to accomodate all vehicles or not.

If it is possible, print "Possible"

In case it is not possible, print "Not Possible"

## Input Format

First line contains **_K_**

Second line is an array which contains arrival time of all the vehicles coming to visit mall.(where element at i index represents arrival time for ith car)

Third line is also an array which contains departure time of all the vehicles coming to visit mall.(where element at i index represents departure time for ith car)

## Constraints

K<10000

Number of cars<100000

## Output Format

Output Possible/Not Possible based on condition mentioned above.

## Sample Input 0

```
1
1 3 5
2 6 8
```

## Sample Output 0

```
Not Possible
```

## Explanation 0

```
At 5, there are 2 vehicles for parking. But you have only one slot.

Hence the answer is "Not Possible"
```

```javascript
// Javascript
function processData(input) {
  //Enter your code here
  input = input.split('\n');
  const k = Number(input[0].trim());
  const arrival = input[1]
    .trim()
    .split(' ')
    .map((e) => Number(e));
  const departure = input[2]
    .trim()
    .split(' ')
    .map((e) => Number(e));
  const n = arrival.length;
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([arrival[i], 'a']);
    arr.push([departure[i], 'd']);
  }
  arr = arr.sort((a, b) => a[0] - b[0]);

  var curr_book = 0;
  for (let i = 0; i < 2 * n; i++) {
    if (arr[i][1] === 'a') {
      curr_book++;
    } else {
      curr_book--;
    }
    if (curr_book > k) {
      console.log('Not Possible');
      break;
    }
  }
  if (curr_book <= k) console.log('Possible');
}
```

```python
# python
parking = int(input())
arrival = list(map(int, input().split()))
departure = list(map(int, input().split()))

arr = []
for num in arrival:
    arr.append([num, "arrival"])

for num in departure:
    arr.append([num, "departure"])
arr.sort()

count = 0
for car in arr:
    if car[1] == "arrival":
        count += 1
    else:
        count -= 1
    if count > parking:
        print("Not Possible")
        break

if count <= parking:
    print("Possible")
```
