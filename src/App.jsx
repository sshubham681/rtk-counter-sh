import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux toolkit Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>

    </>
  )
}

export default App
