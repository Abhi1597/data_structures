# Masai Coding Competition

There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

***E a b***: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

***D***: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue

### Input Format

First line contains an integer Q denoting the number of operations.

Next Q lines will contains one of the 2 types of operations.

### Constraints

Number of dequeue operations will never be greater than enqueue operations at any point of time.

1<=Q<=100000

1<=a<=4

1<=b<=50000

### Output Format

For each 2nd (D) type of operation, print two space separated integers, the front student's club and roll number.

### Sample Input 0

```
5
E 1 1
E 2 1
E 1 2
D
D
```

### Sample Output 0
```
1 1
1 2
```

```javascript
function processData(input) {
    //Enter your code here
    // Time Complexity : O(n)
    input = input.split("\n")
    var size = Number(input[0])
    var masterQueue = []
    var q1 = [], flag1 = false
    var q2 = [], flag2 = false
    var q3 = [], flag3 = false
    var q4 = [], flag4 = false
    
    for(let i = 1; i <= size; i++){
        let op = input[i][0]
        // console.log(op)
        if(op == "E"){
            let temp = input[i].split(" ")
            enqueue(Number(temp[1]), Number(temp[2]))
        }
        else
            dequeue()
    }
    
    function enqueue(team, rollNo){
        switch(team){
            case 1 : q1.push(rollNo)
                    if(!flag1){
                        masterQueue.push(team)
                        flag1 = true
                    }
                    break;
            case 2 : q2.push(rollNo)
                    if(!flag2){
                        masterQueue.push(team)
                        flag2 = true
                    }
                    break;
            case 3 : q3.push(rollNo)
                    if(!flag3){
                        masterQueue.push(team)
                        flag3 = true
                    }
                    break;
            case 4 : q4.push(rollNo)
                    if(!flag4){
                        masterQueue.push(team)
                        flag4 = true
                    }
                    break;
        }
        // console.log(q1, q2, q3, q4)
        // console.log(masterQueue)
    }
    
    function dequeue(){
        let team = masterQueue[0]
        switch(team){
            case 1 :console.log(team, q1[0]) 
                    q1.shift()
                    if(q1.length == 0){
                        masterQueue.shift()
                        flag1 = false
                    }
                    break;
            case 2 :console.log(team, q2[0]) 
                    q2.shift()
                    if(q2.length == 0){
                        masterQueue.shift()
                        flag2 = false
                    }
                    break;
            case 3 :console.log(team, q3[0])  
                    q3.shift()
                    if(q3.length == 0){
                        masterQueue.shift()
                        flag3 = false
                    }
                    break;
            case 4 :console.log(team, q4[0])  
                    q4.shift()
                    if(q4.length == 0){
                        masterQueue.shift()
                        flag4 = false
                    }
                    break;
        }
        // console.log(q1, q2, q3, q4)
        // console.log(masterQueue)   
    }
} 
```


