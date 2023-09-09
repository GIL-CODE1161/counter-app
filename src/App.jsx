import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [Count, setCount] = useState(0)
  return (
   <div className='container my-5'>
    <div className='card text-center my_5'>
      <div className='card-body'>
        <h1 className='title'>Counter App</h1>
        <div className='my-5'>
          <h2 className='my-5'>{Count}</h2>
          <button className='btn btn-success mx-3' onClick={() => setCount(Count +1)}>Increment</button>
          <button className='btn btn-Danger mx-3' onClick={() => setCount(Count -1)}>Decrement</button>
          <button className='btn btn-Secondary mx-3' onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App
