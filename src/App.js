import "./styles.css";
import React,{useState} from 'react';





export default function App() {

  const [contagem  , setContagem] = useState (0);

  const botaoAction = () => {

    setContagem (contagem + 1);

  }

  return (
    <div className="App">
     <div>{contagem}</div>

     <button onClick={botaoAction}>Clique para aumentar</button>
    </div>
  );
}
