import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const add = () => {
    fetch(`https://green-paper-2674.fly.dev/addition/add?a=${a}&b=${b}`, {
      method: 'POST',
    });
  };

  return (
    <div>
      <input type="number" value={a} onChange={e => setA(Number(e.target.value))} />
      <input type="number" value={b} onChange={e => setB(Number(e.target.value))} />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App
