import React, { useRef,useEffect } from 'react'

import '../../App.css';

// I NOTIECD i need to use canvas so although I knew how to use it I started to learn more about it.
// The React way to get a dom element is by giving it a ref prop.
// The useEffect hook allow us to perform side effects in function components.





const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = ctx => {
    ctx.moveTo(0, 0);
ctx.lineTo(260, 100);
ctx.stroke();
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas

// class App extends React.Component {
//   render() {
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     ctx.moveTo(0, 0);
//     ctx.lineTo(200, 100);
//     ctx.stroke();

//     return (
//       <div className="container">
//       <div className="calculator">
//       <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
// </canvas>

            
//       </div> 
//     </div>
//     );
//   }
// }

// export default App;