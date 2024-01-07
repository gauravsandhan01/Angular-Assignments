function Maximum (V1 : number, V2 : number, V3 : number) : void
{ 
 if(V1 > V2 && V1 > V3) 
 { 
 console.log(V1," Large than",V2,"&",V3) 
 } 
 else if(V2 > V1 && V2 > V3) 
 { 
 console.log(V2," Large than",V1,"&",V3) 
 } 
 else if(V3 > V1 && V3 > V2) 
 { 
 console.log(V3," Large than",V1,"&",V2) 
 } 
 else 
 { 
 console.log("All Number are Equal.") 
 } 
} 
Maximum(23,89,6) 