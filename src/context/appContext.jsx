import { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

  const [recentprompt, setrecentprompt] = useState("");
  const [prevprompts, setprevprompts] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false)
  const [prompt, setPrompt] = useState(""); //input
  const [response, setResponse] = useState("");


  const contextvalue = {
    prompt, setPrompt, response, setResponse,
    recentprompt, setrecentprompt,
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