import React, { createContext, useContext, useEffect, useReducer} from "react";

const store = {
  user: null,
  movies: null,
  book: null
}

const reducer =(state,action)=>{
  if(action.type ==='setUser'){
    return {...state,user: action.user}
  }else if(action.type === 'setMovies'){
    return {...state,movies: action.movies}
  }else if (action.type ==='setBook'){
    return {...state,book: action.book}
  }else{
    throw new Error('error')
  }
}

const Context = createContext(null)

const App =()=>{
  const [state,dispatch] = useReducer(reducer,store)
  return (
    <Context.Provider value={{state,dispatch}}>
    <User />
    <hr />
    <Book />
    <Movies />
     </Context.Provider> 
  )
}

const User =()=>{
  const {state,dispatch}= useContext(Context)
  useEffect(()=>{
    ajax('/user').then(user=>{
      dispatch({type: 'setUser',user})
    })
  },[])
  return (
    <div>
    <h1>个人信息</h1>
    <div>name:{state.user ? state.user.name : ''}</div>
    </div>
  )
}

const Movies = ()=>{
  return (
    <div>
      <h1>我的电影</h1>
    </div>
  )
}

const Book=()=>{
  return (
    <div>
      <h1>我的书本</h1>
    </div>
  )
}

function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve({
          id: 1,
          name: "Hello"
        });
      } else if (path === "/books") {
        resolve([
          {
            id: 1,
            name: "JavaScript 高级程序设计"
          },
          {
            id: 2,
            name: "JavaScript 精粹"
          }
        ]);
      } else if (path === "/movies") {
        resolve([
          {
            id: 1,
            name: "爱在黎明破晓前"
          },
          {
            id: 2,
            name: "恋恋笔记本"
          }
        ]);
      }
    }, 2000);
  });
}

export default App;
