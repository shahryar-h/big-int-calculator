
// I learnt how to use localeCompare to compare two string and see which one comes first.
    // sort method dosent work because it compares element by element.
    // I used the numeric option to compare two numeric type strings. 


function swap(num1,num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}
var i = "1002-3";


var o = i.split(/(\/|\+|\-|\*)/);

    for(var i = 0 ; i < o.length; i++ ){
    
      if (["+","-"].includes(o[i])){
          switch(o[i]) {
              case "-":
                num1 = o[i-1];
                num2 = o[i+1];  
                if(num1.localeCompare(num2, undefined, {numeric: true}) == -1) {
                    swap(num1,num2);
                }
                let brrow = 0;
                let res = [];

                while (num1 != 0 && num2 != 0)
                    {
                        dig1 = num1[num1.length-1];
                        dig2 = num2[num2.length-1];
                        if (dig2 > dig1) {
                            dig1 = "1" + dig1;
                            let index = 2;
                            while (num1[num1.length-index] == "0") {
                                index++;
                            }
                            if (num1[(num1.length)-index] !== "0") {
                                browed =  num1[(num1.length)-index];
                                browed -= "1";
                                q= num1.substring(0, num1.length-index);
                                q = q + browed;
                                w = num1.substring(num1.length-(index-1));
                                let index2 = 0;
                                while (w[index2] == "0") {
                                    firstPart = w.substring(0,index2);
                                    firstPart += 9;
                                    secondPart = w.substring(index2+1);
                                    w = firstPart+secondPart;
                                    index2++;  
                                }
                                num1 = q+w;                
                            }
                        }
                        num1 = String(Math.floor(num1/10));
                        num2 = String(Math.floor(num2/10));
                        sub = dig1-dig2;
                        res.unshift(sub);

                    }
                    if (num1 != 0) {
                        res.unshift(num1);
                    }


                  let res2 = res.join("");
                  res3 = parseInt(res2); 
                  o[i-1] = String(res3);
                  o.splice(i, 2); 
                  i--;
                  break;
              case "+":
                  num1 = parseInt(o[i-1]);
                  num2 = parseInt(o[i+1]);
                  let carry = 0;
                  res = [];
                  while (num1 != 0 && num2 != 0)
                    {
                        dig1 = num1%10;
                        dig2 = num2%10;
                        num1 = Math.floor(num1/10);
                        num2 = Math.floor(num2/10);
                        sum = dig1+dig2+carry;
                        finalDigit = sum%10;
                        carry = Math.floor(sum/10);
                        res.unshift(finalDigit);

                    }
                    if (num1 == 0)
                    {
                        carry+=num2;
                        res.unshift(carry);
                    }else if (num2 == 0)
                    {
                        carry+=num1;
                        res.unshift(carry);
                    }
                    o[i-1] = res.join("");
                
                  
                  
                  o.splice(i, 2) 
                  i--;
                  break;
          }
    
      }
      
    
  }

// console.log(o);


// num1 = parseInt(o[i-1]);
// num2 = parseInt(o[i+1]);
// num1 ='123213213124314';
// num2 = '1232132139';



    

// console.log(res);
    
