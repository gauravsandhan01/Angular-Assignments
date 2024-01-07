function ChkPrime (Value1 : number) : void
{ 
 if(Value1 <= 1) 
 { 
 console.log("1 and numbers less than 1 are not prime") 
 } 
 else 
 { 
 var i = 0; 
 for(i = 2; i <= Value1; i++) 
 { 
 if(Value1 % i ==0) 
 { 
 console.log("It is Prime Number") 
 } 
 } 
 } 
} 
ChkPrime(11) 
