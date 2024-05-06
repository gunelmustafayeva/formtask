import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Randomnum from './components/Randomnum';
function App() {
  const [state,setState] = useState();
  const onClick = () =>{
    setState({number:Math.random()})
}

  return (
    <>
      <Button onClick={onClick} />
      <Randomnum state={state}/>
    </>
  )
}

export default App
