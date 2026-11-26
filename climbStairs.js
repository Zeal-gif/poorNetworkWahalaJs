function climbStairs(totalSteps) {
total = 0;
for (let step1 = 1; step1 <= totalSteps; step1 ++){
total = step1;
}

let step2 = 0;
    for(let count2 = 1; count2 <= totalSteps; count2 += 2) {
    steps +=1;
    }
    return total + steps;
}
