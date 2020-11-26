
// I learnt how to use localeCompare to compare two string and see which one comes first.
    // sort method dosent work because it compares element by element.
    // I used the numeric option to compare two numeric type strings. 

// var i = "312+12+2";


// var o = i.split(/(\/|\+|\-|\*)/);

//     for(var i = 0 ; i < o.length; i++ ){
    
//       if (["+","-"].includes(o[i])){
//           switch(o[i]) {
//               case "-":
//                   o[i-1] = parseInt(o[i-1]) - parseInt(o[i+1]);
//                   o.splice(i, 2); 
//                   i--;
//                   break;
//               case "+":
//                   num1 = parseInt(o[i-1]);
//                   num2 = parseInt(o[i+1]);
//                   let carry = 0;
//                   let res = [];
//                   while (num1 != 0 && num2 != 0)
//                     {
//                         dig1 = num1%10;
//                         dig2 = num2%10;
//                         num1 = Math.floor(num1/10);
//                         num2 = Math.floor(num2/10);
//                         sum = dig1+dig2+carry;
//                         finalDigit = sum%10;
//                         carry = Math.floor(sum/10);
//                         res.unshift(finalDigit);

//                     }
//                     if (num1 == 0)
//                     {
//                         carry+=num2;
//                         res.unshift(carry);
//                     }else if (num2 == 0)
//                     {
//                         carry+=num1;
//                         res.unshift(carry);
//                     }
//                     o[i-1] = res.join("");
                
                  
                  
//                   o.splice(i, 2) 
//                   i--;
//                   break;
//           }
    
//       }
      
    
//   }

// console.log(o);


// num1 = parseInt(o[i-1]);
// num2 = parseInt(o[i+1]);
num1 ='134444';
num2 = '52';
if(num1.localeCompare(num2, undefined, {numeric: true}) == -1) {

    let temp = num1;
    num1 = num2;
    num2 = temp;
}




let brrow = 0;
let res = [];

while (num1 != 0 || num2 != 0)
    {
        dig1 = num1[num1.length-1];
        dig2 = num2[num2.length-1];
        if (dig2 > dig1) {
            dig1 = "1" + dig1;
            if (num1[num1.length-2] !== "0") {

                browed =  num1[num1.length-2];
                browed -= "1";
                q= num1.substring(0, num1.length-2);
                q = q + browed;
                w = num1.substring(num1.length-1);
                num1 = q+w;                
            }else{//todo: agar 0 bood enghadr boro ke 0 nabashe}
        }
        }

        num1 = String(Math.floor(num1/10));
        num2 = String(Math.floor(num2/10));
        sub = dig1-dig2;
        res.unshift(sub);
        console.log("s");

    }
    if (num1 != 0) {
        res.unshift(num1);
    }
    

console.log(res);
    
