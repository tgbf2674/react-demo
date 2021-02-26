import React from "react";

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {n:1}
//   }
//   onClick=()=>{this.setState(state=>({n: state.n+1}))}
  
//   render (){
//     return(
//       <div>
//       {this.state.n}
//       <button onClick={this.onClick}>+1</button>
//       </div>
//     )
// }
// }

const App = (props)=>{
  const [n,setN] = React.useState(0)
    return(
      <div>
        {n}
        <button onClick={()=>setN(n+1)}>+1</button>
      </div>
    )
}

export default App;
