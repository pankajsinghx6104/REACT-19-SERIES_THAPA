import { useEffect, useState } from "react";
import "./index.css";
export const ReactUseEffect = () => {
    const [count,setCount] = useState(0);
    const [date,setDate]= useState("")
    useEffect(()=>{
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
        

        console.log("Count Value:", count)
    },[count])
    return (
        <div className="container effect-container">
            <h1> Hello, useEffect! </h1>
            <p>Count:{count}</p>
            <h2>{date}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
};