/* ---------------------------------------
    EXERCISE 1: LOOPING A TRIANGLE
--------------------------------------- */

// Your code here.
// initiate bindings.
let str = "",
    i = 0;
while(i < 7) {
  // add an extra hash to the string.
  str = str + "#";
  // output the string to the console.
  console.log(str);
  // increment the count.
  i ++;
}

/* --------------------------------------
    EXERCISE 2: FIZZBUZZ
-------------------------------------- */

// Your code here.
// initiate bindings.
let i = 1;

// loop.
while(i <= 100) {
	// check if the count is divisable by 3 & 5.
  	if(i % 3 === 0 && i % 5 === 0) {
		// output message.
      	console.log("FizzBuzz");
		// increase count.
      	i ++;
      
    // check if the count is divisable by 3.
    } else if(i % 3 === 0) {
		// output message.
      	console.log("Fizz");
		// increase count.
      	i ++;
      
    // check if the count is divisable by 5.
    } else if(i % 5 === 0){
		// output message.
      	console.log("Buzz");
		// increase count.
      	i ++;
    }
	// output default message.
  	console.log(i);
  	i++;
}