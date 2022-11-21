import React,  { useState } from 'react'

export default function CounterHooks( { initialCount } ) {
    // eslint-disable-next-line no-lone-blocks
    const [count, setCount] = useState({ initialCount }); {/* destructuring the returned 2-value array from useState */}
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount -1)}>-</button> 
            <span> {count} </span>
            <button onClick={() => setCount(prevCount => prevCount+1 )} >+</button>
        </div>
        )
}