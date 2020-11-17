var i = "12-45/5*3";

/(:\s|,\s)/
var o = i.split(/(\/|\+|\-|\*)/);


for(var i=0 ; i < o.length; i++ ){
    
    
    
    if (["/","*"].includes(o[i])){
        
        switch(o[i]) {
            case "/":
                res = o[i-1] / o[i+1];
                o[i-1] = res;
                o.splice(i, 2) 
                i--;
                console.log(o);
                break;
            case "*":
                res = o[i-1] * o[i+1];
                o[i-1] = res;
                o.splice(i, 2) 
                i--;
                console.log(o);
                break;
        }
  
    }
    
  
}

for(var i=0 ; i < o.length; i++ ){
    
    if (["+","-"].includes(o[i])){
        
        switch(o[i]) {
            case "-":
                res = o[i-1] - o[i+1];
                o[i-1] = res;
                o.splice(i, 2) 
                i--;
                console.log(o);
                break;
            case "+":
                res = parseInt(o[i-1]) + parseInt(o[i+1]);
                o[i-1] = res;
                o.splice(i, 2) 
                i--;
                console.log(o);
                break;
        }
  
    }
    
  
}


// console.log(o);

