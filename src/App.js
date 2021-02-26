import React, { useReducer} from "react";

const initial = {
  n:1
}

const reducer = (state,action)=>{
  if(action.type === 'add'){
    return {n:state.n+action.number}
  }else if(action.type ==='mult'){
    return {n: state.n*2}
  }else{
    throw new Error('unknown type')
  }
}

const App = ()=>{
  const [state,dispatch]= useReducer(reducer,initial)
  const add = ()=>{
    dispatch({type: 'add',number : 1})
  }
  const mult =()=>{
    dispatch({type: 'mult', number: 2})
  }
  return (
    <div>
    <h1>n:{state.n}</h1>
    <button onClick={add}>+2</button>
    <button onClick={mult}>*2</button>
    </div>
  )
}


export default App;
