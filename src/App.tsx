import { useState } from 'react';
import './App.css'

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <section>
        <input type= 'text'/>
        <br/>
        <input type="button" value="Clique" onClick={()=>{setContador(contador+1)}}/>
        <p>{contador}</p>
      </section>
      </>

  )
}
export default App;
