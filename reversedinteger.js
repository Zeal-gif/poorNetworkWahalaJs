function reversedinteger(number){
if (number > 0){
let reverse = 0;
let reversed = 0;


while (number > 0){
	reverseigit = number % 10
	reverse = reverse * 10 + reversedigit;
	number = math.floor(number / 10);
}
}
else{
reversedigit = (number % 10)
reverse = reversedigit;
number = math.floor(number/-10)

while(number>0){
    reversedigit = number% 10
    reverse = reverse * 10 -reversedigit
    number = math.floor(number/10)
    
return reverse 
}
result = reverseinterger(-1234);
console.log(result);
