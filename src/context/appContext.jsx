import { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props)=>{

    const [input , setinput] = useState("")
    const [recentprompt , setrecentprompt]= useState("");
    const [ prevprompts , setprevprompts] = useState([]);
    const [showresult , setshowresult] = useState(false);
    const [loading, setloading] = useState(false)
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");


  const contextvalue = {
     prompt, setPrompt,response,setResponse,
     input , setinput , recentprompt , setrecentprompt,
     prevprompts, setprevprompts, showresult, setshowresult,
     loading, setloading,
  } 
  
  return (
    <Context.Provider value={contextvalue}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;