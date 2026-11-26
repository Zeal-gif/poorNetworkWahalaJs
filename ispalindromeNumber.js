function ispalindromeNumber(number){

	let reversed = 0;
	let count = num;
	
	while (count > 0){
	   
	reversed = reversed * 10 + count % 10;
	count = count / 10;
	count = math.floor(count);
}
    if (reversed == num){
        return true;
}

    else{
    return false
 }
