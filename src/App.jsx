import './App.css'
import { increase } from './actions';
import { decrease} from './actions';
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const val = useSelector((state)=>state.updateValue)
  const dispatch = useDispatch()
  return (
    <div className="counter">
      <h2>My Redux Counter App</h2>
      <button onClick={()=>dispatch(decrease())}> - </button>
      <input type="text" value={val} readOnly/>
      <button onClick={()=>dispatch(increase())}> + </button>

    </div>
  );
}

export default App;
