
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
            num1 = num1.substring(0,num1.length-1);
            num2 = num2.substring(0,num2.length-1);
            sub = dig1-dig2;
            res.unshift(sub);

        }
        if (num1 != 0) {
            res.unshift(num1);
        }
      let res2 = res.join("");
      
      return String(res2);
    
}

function bigIntAddition(num1,num2) {
        let carry = 0;
        res = [];
        while (num1 != 0 && num2 != 0)
        {
            dig1 = parseInt(num1.substring(num1.length-1));
            dig2 = parseInt(num2.substring(num2.length-1));
            num1 = num1.substring(0,num1.length-1);
            num2 = num2.substring(0,num2.length-1);
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
            while (num1 != 0 ) {
                dig1 = parseInt(num1.substring(num1.length-1));
                num1 = num1.substring(0,num1.length-1);
                sum = dig1+carry;
                finalDigit = sum%10;
                carry = Math.floor(sum/10);
                res.unshift(finalDigit);
            }
            if (carry != 0 ) {
                res.unshift(carry);
            }

            
        }
        resultt = res.join("");
        resultt = resultt.replace(/^0+/, '');
        return resultt;
    
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
        multiplier = parseInt(num2.substring(num2.length-1));
        num2 = num2.substring(0,num2.length-1);
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
                carry = "0";
            }            
        }
        forAddition.unshift(numToAdd.join(""))
        numToAdd = [];
        carry = "0";
        

    }

    while (forAddition.length > 1) {
        ba = bigIntAddition(forAddition[0],forAddition[1])
        forAddition[0] = ba;
        forAddition.splice(1,1);
    }
    
    return forAddition[0];
    
    

}


// var i = "1555*1444+2-1";
// var o = i.split(/(\/|\+|\-|\*)/);


// for(var i = 0 ; i < o.length; i++ ){
    
//     if (["*","/"].includes(o[i])){
//         switch(o[i]) {
//             case "/":
//                 o[i-1] = parseInt(o[i-1]) / parseInt(o[i+1]);
//                 o.splice(i, 2); 
//                 i--;
//                 break;
//             case "*":
//                 o[i-1] = bigIntMultiplication(o[i-1], o[i+1]);
//                 o.splice(i, 2) 
//                 i--;
//                 break;
//         }
  
//     }
     
// }
//     for(var i = 0 ; i < o.length; i++ ){
    
//       if (["+","-"].includes(o[i])){
//           switch(o[i]) {
//               case "-":
//                 num1 = o[i-1];
//                 num2 = o[i+1];
//                 o[i-1] = bigIntSubtraction(num1, num2);  
//                 o.splice(i, 2); 
//                 i--;
//                 break;
//               case "+":
//                 num1 = parseInt(o[i-1]);
//                 num2 = parseInt(o[i+1]);
//                 o[i-1] = bigIntAddition(num1,num2);
//                 o.splice(i, 2) 
//                 i--;
//                 break;
//           }
    
//       }
      
    
//   }

// console.log(o);











function guessQuotient(num2, dividendSection){
    guess = "1";
    test = true;
    while (test == true ) {
        numberToValidate = bigIntMultiplication(num2,String(guess));
        if (numberToValidate.localeCompare(dividendSection, undefined, {numeric: true}) == -1 ) {
            subtraction = bigIntSubtraction(dividendSection,numberToValidate);
            if (subtraction.localeCompare(num2, undefined, {numeric: true}) == -1) {
                test =false;
                break;
            }
        }
        guess++;    
    }
    return [guess, subtraction];
}
function bigIntDivision(num1, num2) {

    if (num2 == 0) {
        return "can't divide by 0";
        
    }

    if((num1.localeCompare(num2, undefined, {numeric: true}) == -1) || num1 == "0"){
        return 0;
    }
    result = [];
    let lenDivisor = num2.length;
    dividendSection = num1.substring(0,lenDivisor);
    if(dividendSection.localeCompare(num2, undefined, {numeric: true}) == -1){
        dividendSection = num1.substring(0,lenDivisor+1);
        num1 = num1.substring(lenDivisor+1);
    }else{
        num1 = num1.substring(lenDivisor);
    }

    test = false;
    while (num1.length != 0 || !test) {
        
        guessResult = guessQuotient(num2, dividendSection);
        result.push(guessResult[0]);
        reminder = guessResult[1];
        // num1 = num1.substring(1);
        zero = 0;
        while (reminder.localeCompare(num2, undefined, {numeric: true}) == -1 && num1.length != 0) {
            if (zero > 0) {
                result.push(0);
                // zero = 0;
            }
            reminder = reminder + num1[0];
            num1 = num1.substring(1);
            zero++;
        }
        // if(){
        //     reminder = reminder + num1[0];
        //     num1 = num1.substring(1);
        //     //num1 = num1.substring(lenDivisor+1);
        // }
        dividendSection = reminder;
        test = reminder.localeCompare(num2, undefined, {numeric: true}) == -1;


    }

    
    
    

    
    


    return result;
    

    
}


// bigIntDivision(num2,num1);
num1 = "1232132134353467745645756657";
num2 = "22222";

console.log(bigIntMultiplication(num1,num2));

    

// console.log(res);





