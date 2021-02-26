import React, {useEffect, useState } from "react";



const App = (props)=>{
  const [childVisible,setChildVisible] = useState(true)
  const show = ()=>{
    setChildVisible(true)
  }
  const hide =()=>{
    setChildVisible(false)
  }

    return(
      <div>
        {childVisible ? <button onClick={hide}>hide</button> : <button onClick={show}>show</button>} 
        {childVisible? <Child />: null}
      </div>
    )
}

const Child=(props)=>{
  useEffect(()=>{
    return ()=>{
      console.log('disapper')
    }
  })
  return(
    <div>
      child
    </div>
  )
}

export default App;
