import { string } from 'prop-types'
import { useReducer } from 'react'
import { useContext } from 'react'
import CounterContext from './CounterContext';

Button.propTypes = {
  type: string,
  label: string
}

function Display() {
  const [counter, ] = useContext(CounterContext);
  return <div>
    {counter}
  </div>
}

function Button({ type, label}) {
  const [, dispatch] = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({ type })}>
      { label}
    </button>
  )
}

function App() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <Display counter={counter} />
      <div>
        <Button type='INC' label='+'/> 
        <Button type='DEC' label='-'/> 
        <Button type='ZERO' label='0'/> 
      </div>
    </CounterContext.Provider>
  )
}

function counterReducer(state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'ZERO':
      return 0;
    default:
      return state;
  }
}

export default App
