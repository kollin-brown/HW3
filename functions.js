function fizzBuzz(x){
    if (x%3===0 && x%5===0){
        return "FizzBuzz";

    }else if(x%3===0){
        return "Fizz";
    }else if(x%5===0){
        return "Buzz";

    }else{
        return x;
    }
}
console.log(fizzBuzz(3));

for (i=1; i<=15; i++) { 
    
     if ( i % 3 === 0 && i % 5 === 0) { 
       console.log("FizzBuzz"); }
     
     else if ( i % 3 === 0) {
       console.log("Fizz"); }
       
     else if ( i % 5 === 0) {
         console.log("Buzz"); }
     else {
       console.log(i);
     }
   }