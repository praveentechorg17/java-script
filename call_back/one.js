let calc=(a,b,x)=>{
    let result=""
    if(x == "sum"){
         result=a+b
    }
    if(x == "multi"){
        result=a*b
    }
    return result;
    
} 
let output=calc(10,20,"sum");
let praveen=calc(10,20,"multi")
console.log(output)
console.log(praveen)
