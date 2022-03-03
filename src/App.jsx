import "./App.css";
import React from "react";
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main"
import {Footer} from "./Components/Footer/Footer"
import Content from "./Components/Content/Content"

function App() {
  const elSelect = React.useRef()
  const [lang , setLange] = React.useState("en");

  return(
     <div className="App">
         <select ref={elSelect} value={lang} onChange={()=>{
           setLange(elSelect.current.value);
         }}>
           <option value="en">EN</option>
           <option value="ru">RU</option>
           <option value="uz">UZ</option>
         </select>
         <Header lang={lang} content={Content} />
         <Main lang={lang} content={Content}/>
         <Footer lang={lang} content={Content}/>
     </div>
  )
}
export default App;
