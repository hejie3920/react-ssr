import React,{useState} from 'react'

function App(props){
    const [count,setCount] = useState(0)
    return (
      <div>
        <h1>{props.title}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>click on me</button>
      </div> 
    )
}

export default <App title="react ssr"></App>