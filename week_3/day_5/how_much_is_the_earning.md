# How much is the earning

Noddy choosed a city for Advertising his company's product. There are S streets in that city. Each day he travels one street. There are N buildings in a street which are located at points 1,2,3....N(respectively). Each building has some height(Say h meters).

Noddy stands at point 0. His height is 0.5m. Now he starts communicating with the people of each building. He can communicate with people of a particular building only if he can see that building. If he succeed to communicate with any particular building then his boss gives him R rupees. i.e. if he communicates with K buildings in a day, then he will earn K times R rupees. Now Noddy wants to know his maximum Earning for each day.

Note: All the points are on Strainght Line and Noddy is always standing at point 0.

### Input Format

First line of input contains an integer S, denoting no of streets in the city.

Details for each street is described in next two lines.

First line contains two integers N and R denoting no of buildings in the Street and earning on communicating with a building.

Second line contains N integers, denoting height of building.

### Constraints

N <= 10000

h <= 1000000000

S <= 100

R <= 10000

### Output Format

Print S Lines, each containing maximum earning in i-th street.

### Sample Input 0

```
2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89
```

### Sample Output 0
```
6
60
```

### Explanation 0
```
There are two streets in the city.

The first street has 6 buildings and the earning of Napoleon for communicating with each building is 3 rupees.

Height of buildings are 8 2 3 11 11 10 respectively.

As Noddy is standing at point 0, he will be able to see only 1st and 4th building.

So his total earning will be 3*2 = 6 in that street

Similarly for 2nd street his earning will be 60 rupees
```


```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity: O(n^2)
    input = input.split('\n')
    var testCases = parseInt(input[0])
    var arr1 = [], arr2 = []
    
    for(var i = 0, j = 1; j <= testCases*2; i++, j+=2){
        arr1[i] = input[j].split(" ").map(function(ele){
            return parseInt(ele)
        })
    }
    
    for(var i = 0, j = 2; j <= testCases*2; i++, j+=2){
        arr2[i] = input[j].split(" ").map(function(ele){
            return parseInt(ele)
        })
    }
    // console.log(arr1)
    // console.log(arr2)
    
    // Checks for each testcase and prints Noddy's earnings
    for(var i = 0; i < testCases; i++){
        var size = arr1[i][0]
        var rupee = arr1[i][1]
        var building = checkHeight(size, arr2[i])
        var earning = rupee*building
        console.log(earning)
    }
    
    // Gives the num of buildings Noddy can see
    function checkHeight(size, testArr){
        var lowest = testArr[0]
        var count = 1
        for(var i = 1; i < size; i++){
            if(testArr[i] > lowest){
                lowest = testArr[i]
                count++
            }
        }
        // console.log(count)
        return count
    }
} 
```


