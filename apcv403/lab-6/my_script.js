
function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If the number is divisible by any number other than 1 and itself, it's not prime
      return false;
    }
  }

  // If no divisor was found, the number is prime
  return true;
}

function isInteger(input) {
  return /^\d+$/.test(input);
}

function round(){
	let input = document.getElementById('textInput');
	var value = input.value
	if(isInteger(value)){
		var verifier;
		if(isPrime(parseInt(value))){
			verifier = ' is';
		}else{
			verifier = ' is not';
		}
		let statement = value.toString() + verifier + ' a prime number.'
		document.getElementById('statement').textContent = statement	
	}else{
		document.getElementById('statement').textContent = 'Please enter a number.'
	}

}
