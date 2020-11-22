import React from 'react';
// import ReactDOM from 'react-dom';




class Calculator extends React.Component {
  constructor(){
    super()
    this.validateInt = this.validateInt.bind(this);
    this.numberClicked = this.numberClicked.bind(this);
    this.addition = this.addition.bind(this);
    this.validateOutputBox = this.validateOutputBox.bind(this);
    this.calc = this.calc.bind(this);
  //   this.state = {
  //     equation: "0",
  //     currentOpertion: ""
  
  // };
  this.equation = "0";
  this.currentOpertion = "";
  }
  
  // adds digits to outputBox as clicked
  numberClicked(number) {
    let outputBox = document.getElementById('outputBox');
    outputBox.value = outputBox.value + number;
  }

  
// validate outputBox for correct input prior to updating the state
  validateOutputBox(outputBox){
    let currentInput = outputBox.value;
      if(currentInput === ""  ) {
      outputBox.placeholder = "I need an Integer here! not an empty input";
    }else{
      let isInt = this.validateInt(currentInput);
      if(isInt === false){
        outputBox.value = "";
        outputBox.placeholder = "This calculator is for Integers Only!";
      }else{return true}
    }
  }

  addition(){
    let outputBox = document.getElementById('outputBox');
    let isInt = this.validateOutputBox(outputBox);
    if (isInt === true){
      // this.setState((state) => ({ equation: state.equation + "+" + outputBox.value }));
      // console.log(this.he);
      this.equation = this.equation + "+" + outputBox.value;

    }
    this.currentOpertion = "+";
    outputBox.value = "";
  }
  // a helper function to validate if the input is an Integer
  // returns true if the input is integer
  validateInt(currentInput) {

    let inputToArray = [...currentInput];
    for(let item of inputToArray){
      // console.log(item);
      if(isNaN(parseInt(item))){
        return false;
      } 
    }
    return true;

  }
  // start by implementing this method. justt give state to this method and use the logic we worked on already
  calc(){
    let outputBox = document.getElementById('outputBox');
    let isInt = this.validateOutputBox(outputBox);
    if (isInt === true){
      this.equation = this.equation + this.currentOpertion + outputBox.value;
    }
    outputBox.value = "";
    var o = this.equation.split(/(\/|\+|\-|\*)/);
    for(var i=0 ; i < o.length; i++ ){
    
      if (["/","*"].includes(o[i])){
          
          switch(o[i]) {
              case "/":
                  o[i-1] = o[i-1] / o[i+1];
                  o.splice(i, 2) 
                  i--;
                  console.log(o);
                  break;
              case "*":
                  o[i-1] = o[i-1] * o[i+1];
                  o.splice(i, 2) 
                  i--;
                  console.log(o);
                  break;
          }
    
      }
      
    
  }
    for(var i = 0 ; i < o.length; i++ ){
    
      if (["+","-"].includes(o[i])){
          switch(o[i]) {
              case "-":
                 
                  o[i-1] = o[i-1] - o[i+1];
                  o.splice(i, 2) 
                  i--;
                  break;
              case "+":
                  
                  o[i-1] = parseInt(o[i-1]) + parseInt(o[i+1]);
                  o.splice(i, 2) 
                  i--;
                  break;
          }
    
      }
      
    
  }
    this.equation = "0";
    console.log(o);

  }
  
  render() {

    
    return (
      <div className="mainContent">
        <div className="calculator">


        <div className="operators operators1">
        <div onClick={this.calc} className="operator" id='equals'><h1>=</h1></div>
        <div className="operator" id='clear'><h1>C</h1></div>



        </div>
        <div className="dialPad">
        <div className="numbers">
          <div onClick={() => this.numberClicked(1)} className="rect"><h2 id='num1'>1</h2></div>
          <div onClick={() => this.numberClicked(2)} className="rect"><h2 id='num2'>2</h2></div>
          <div onClick={() => this.numberClicked(3)} className="rect"><h2 id='num3'>3</h2></div>

        </div>
        <div className="numbers">
          <div onClick={() => this.numberClicked(4)} className="rect"><h2 id='num4'>4</h2></div>
          <div onClick={() => this.numberClicked(5)} className="rect"><h2 id='num5'>5</h2></div>
          <div onClick={() => this.numberClicked(6)} className="rect"><h2 id='num6'>6</h2></div>

        </div>
        <div className="numbers">
          <div onClick={() => this.numberClicked(7)} className="rect"><h2 id='num7'>7</h2></div>
          <div onClick={() => this.numberClicked(8)} className="rect"><h2 id='num8'>8</h2></div>
          <div onClick={() => this.numberClicked(9)} className="rect"><h2 id='num9'>9</h2></div>

        </div>
        <div className="numbers">
          <div onClick={() => this.numberClicked(0)} className="rect"><h2 id='num10'>0</h2></div>
          
          

        </div>

 

        </div>
        <div className="operators operators2">

          <div onClick={this.addition} className="operator" id='additioin'><h1>+</h1></div>
          <div className="operator" id='subtraction'><h1>-</h1></div>
          <div className="operator" id='multiplication'><h1>*</h1></div>
          <div className="operator" id='division'><h1>/</h1></div>

        </div>
        

        </div>   
        
        <form>
          <input className="output" id='outputBox' type="text" />
        </form>
      
      </div>
    );
  }
}

export default Calculator