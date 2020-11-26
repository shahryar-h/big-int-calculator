import React from 'react';
// import ReactDOM from 'react-dom';


class Calculator extends React.Component {
  constructor(){
    super()
    this.validateInt = this.validateInt.bind(this);
    this.numberClicked = this.numberClicked.bind(this);
    this.validateOutputBox = this.validateOutputBox.bind(this);
    this.generalblabal = this.generalblabal.bind(this);
    this.addition = this.generalblabal.bind(this,"+");
    this.subtraction = this.generalblabal.bind(this,"-");
    this.multiplication = this.generalblabal.bind(this,"*");
    this.division = this.generalblabal.bind(this,"/");
    this.calc = this.calc.bind(this); 
    this.state = {

      equation: "",
      operand: "",
      currentOpertion: "",
      error: undefined

  };

  }
  
  // adds digits to outputBox as clicked
  numberClicked(number) {
    const {operand} = this.state;
    this.setState(({operand}) => ({operand: operand + number}));
  }

// validate outputBox for correct input prior to updating the state
  validateOutputBox(){
    const {operand} = this.state;

    let currentInput = operand;
      if(currentInput === ""  ) {
      this.setState({error: "I need an Integer here! not an empty input"});
    }else{
      let isInt = this.validateInt(currentInput);
      if(isInt === false){
        this.setState({
          operand: "",
          error: "I need an Integer here! not an empty input"
      });

      }else {return true}
    }
  }

  generalblabal(operator){
    const {equation,operand,currentOpertion} = this.state;

    let isInt = this.validateOutputBox();
    if (isInt === true){

      if (equation === "") {
        this.setState(({equation}) => ({ equation: equation + operand }));
      }else{
        this.setState(({equation}) => ({ equation: equation + operator + operand }));
      }

    }

    this.setState(({currentOpertion}) => ({ 
      currentOpertion: operator,
      operand: ""
    }));
    
  }

  // a helper function to validate if the input is an Integer
  // returns true if the input is integer
  validateInt(currentInput) {
    let inputToArray = [...currentInput];
    for(let item of inputToArray){
      if(isNaN(parseInt(item))){
        return false;
      } 
    }
    return true;

  }
  // start by implementing this method. just give state to this method and use the logic we worked on already
  calc(){
    const {equation,operand,currentOpertion} = this.state;

    this.setState(() => ({ 
      currentOpertion: "",
      operand: ""
    }));

    console.log(equation);
    var o = `${equation}${currentOpertion}${operand}`.split(/(\/|\+|\-|\*)/);

    for(var i = 0 ; i < o.length; i++ ){
    
      if (["*","/"].includes(o[i])){
          switch(o[i]) {
              case "/":
                  o[i-1] = parseInt(o[i-1]) / parseInt(o[i+1]);
                  o.splice(i, 2); 
                  i--;
                  break;
              case "*":
                  o[i-1] = parseInt(o[i-1]) * parseInt(o[i+1]);
                  o.splice(i, 2) 
                  i--;
                  break;
          }
    
      }
       
  }


  
  //   for(var i = 0 ; i < o.length; i++ ){
    
  //     if (["+","-"].includes(o[i])){
  //         switch(o[i]) {
  //             case "-":
  //                 o[i-1] = parseInt(o[i-1]) - parseInt(o[i+1]);
  //                 o.splice(i, 2); 
  //                 i--;
  //                 break;
  //             case "+":
  //                 o[i-1] = parseInt(o[i-1]) + parseInt(o[i+1]);
  //                 o.splice(i, 2) 
  //                 i--;
  //                 break;
  //         }
    
  //     }
      
    
  // }
  this.setState(() => ({ 
    operand: o[0]
  }));

  this.setState(() => ({ 
    equation: ""
  }));
  }
  
  render() {
    const {equation,operand,currentOpertion,error } = this.state;

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
          <div onClick={this.subtraction} className="operator" id='subtraction'><h1>-</h1></div>
          <div onClick={this.multiplication} className="operator" id='multiplication'><h1>*</h1></div>
          <div onClick={this.division} className="operator" id='division'><h1>/</h1></div>

        </div>

        </div>   
        
        <form>

          <input className="output" id='outputBox' type="text" placeholder={error ? error : ""} value={this.state.operand} onChange={({target:{value}}) => this.setState({operand: value})}/>

        </form>
      
      </div>

    );
  }
}
export default Calculator;