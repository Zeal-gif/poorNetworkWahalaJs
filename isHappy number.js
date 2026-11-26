function isHappy(number) {
let tries = 0;


while (number !== 1 && tries < 20) {
let total = 0;


while (number > 0) {
let lastDigit = number % 10;
total = total + (lastDigit * lastDigit);
number = (number - lastDigit) / 
