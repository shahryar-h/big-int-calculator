var i = "3+12/2";

// /(:\s|,\s)/
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


for(var j=0 ; j < o.length; j++ ){
    if(j[i] == "/"){
      console.log("got");
    }
    console.log(typeof o[j]);
    if (["/","*"].includes(o[i])){
        switch(o[j]) {
            case "/":
                o[j-1] = o[j-1] / o[j+1];
                o.splice(j, 2) 
                j--;
                break;
            case "*":
                o[j-1] = o[j-1] * o[j+1];
                o.splice(j, 2) 
                j--;
                console.log(o[j]);
                break;
        }
  
    }
    
  
}

