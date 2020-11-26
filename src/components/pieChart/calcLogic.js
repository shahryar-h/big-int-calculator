
// I learnt how to use localeCompare to compare two string and see which one comes first.
    // sort method dosent work because it compares element by element.
    // I used the numeric option to compare two numeric type strings. 


function swap(num1,num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

function replaceAtIndex(number, browed, index) {
    let len = number.length;
    let firstHalf = number.substring(0,index);
    let secondHalf = number.substring(index+1);
    return firstHalf + browed + secondHalf;
}

function bigIntSubtraction(num1, num2) {
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
                        w = replaceAtIndex(w,9,index2);
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
      return String(res3);
    
}

function bigIntAddition(num1,num2) {
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
        return res.join("");
    
}


function bigIntMultiplication(num1, num2) {
    if(num1.localeCompare(num2, undefined, {numeric: true}) == -1) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    num1length = num1.length;
    num2length = num2.length;
    numToAdd = [];
    carry = 0;
    forAddition = [];
        for(let j = 0 ; j < num2length ; j++) {
        multiplier = parseInt(num2 % 10);
        num2 = String(Math.floor(num2/10));
        for(let k = 0; k< j ; k++){
            numToAdd.unshift("0");
        }

        for (let i = num1length-1; i > -1; i--) {
            digits = multiplier*parseInt(num1[i]);
            digits = parseInt(digits) + parseInt(carry);
            if(digits > 9 && i != 0 ){
                lastDigit = digits% 10;
                // digits = Math.floor(digits/10);
                carry = Math.floor(digits/10);
                numToAdd.unshift(lastDigit); 
            }else{
                numToAdd.unshift(digits);
            }            
        }
        forAddition.unshift(numToAdd.join(""))
        numToAdd = [];
        carry = "0";
        

    }

    while (forAddition.length > 1) {
        forAddition[1] = bigIntAddition(forAddition[0],forAddition[1]);
        forAddition.splice(0,1);
    }
    
    return String(parseInt(forAddition[0]));
    
    

}


var i = "1555*1444+2-1";
var o = i.split(/(\/|\+|\-|\*)/);


for(var i = 0 ; i < o.length; i++ ){
    
    if (["*","/"].includes(o[i])){
        switch(o[i]) {
            case "/":
                o[i-1] = parseInt(o[i-1]) / parseInt(o[i+1]);
                o.splice(i, 2); 
                i--;
                break;
            case "*":
                o[i-1] = bigIntMultiplication(o[i-1], o[i+1]);
                o.splice(i, 2) 
                i--;
                break;
        }
  
    }
     
}
    for(var i = 0 ; i < o.length; i++ ){
    
      if (["+","-"].includes(o[i])){
          switch(o[i]) {
              case "-":
                num1 = o[i-1];
                num2 = o[i+1];
                o[i-1] = bigIntSubtraction(num1, num2);  
                o.splice(i, 2); 
                i--;
                break;
              case "+":
                num1 = parseInt(o[i-1]);
                num2 = parseInt(o[i+1]);
                o[i-1] = bigIntAddition(num1,num2);
                o.splice(i, 2) 
                i--;
                break;
          }
    
      }
      
    
  }

console.log(o);









// num1 ='1555';
// num2 = '1444';


// console.log(bigIntMultiplication(num1,num2));

    

// console.log(res);

