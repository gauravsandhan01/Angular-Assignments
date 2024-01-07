function Fibonacci(Value2: number): void 
{ 
    var i: number = 0; 
    var isum: number = 0; 
    var first: number = 0; 
    var second: number = 1; 
    while (isum <= Value2) 
    { 
    console.log(second); 
    isum = first + second; 
    first = second; 
    second = isum; 
    } 
} 
Fibonacci(21);