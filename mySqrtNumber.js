function mySqrt(number){
if (number < 0){
	return 0;
}
let total = 0;
for (digit = 0; digit * digit <= number; digit++) {
	total = digit;
}
return total;
}
console.log(mySqrt(8));
