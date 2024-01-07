function DisplayFactors(Value : number) : void 
{ 
 if(Value < 0) 
 { 
 console.log("Please Enter Positive Integer") 
 } 
 else
 { 
 var i = 0; 
 for(i = 1; i < Value; i++) 
 { 
 if(Value % i == 0) 
 { 
 console.log(i," ") 

 } 
 } 
 } 
} 
DisplayFactors(20)