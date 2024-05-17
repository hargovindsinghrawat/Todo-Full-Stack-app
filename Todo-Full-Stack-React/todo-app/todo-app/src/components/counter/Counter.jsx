import { useState } from 'react'
import CounterButton from './CounterButton.jsx'

export default  function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }

    function decrementCounterParentFunction(by){
        setCount(count - by)
    }

    function resetButton(){
        setCount(0)
    }

    return (
        <>
            <span className="count">{count}</span>
            <CounterButton by={1} 
                increment={incrementCounterParentFunction} 
                decrement={decrementCounterParentFunction}/>
            <CounterButton by={2} 
                increment={incrementCounterParentFunction} 
                decrement={decrementCounterParentFunction}/>
            <CounterButton by={3} 
                increment={incrementCounterParentFunction} 
                decrement={decrementCounterParentFunction}/>
            <button className="ResetButton" 
                onClick={resetButton}>Reset</button>
        </>
    )
}