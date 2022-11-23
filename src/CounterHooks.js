import React,  { useState, useContext } from 'react'
import { ThemeContext } from './App';

export default function CounterHooks( { initialCount } ) {
    // eslint-disable-next-line no-lone-blocks
    const [count, setCount] = useState(initialCount); {/* destructuring the returned 2-value array from useState */}
    const style = useContext(ThemeContext)
    return (
        <div>
            <button  style={style} onClick={() => setCount(prevCount => prevCount -1)}>-</button> 
            <span> {count} </span>
            <button  style={style} onClick={() => setCount(prevCount => prevCount+1 )} >+</button>
        </div>
        )
}