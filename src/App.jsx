import './App.css'
import { useState } from 'react'


function App() {
	const [value, setValue] = useState("");

  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="block" style={{backgroundColor: value}}> {value}</div>
    </>
  )
}

export default App
