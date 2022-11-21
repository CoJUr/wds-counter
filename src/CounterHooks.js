import React,  { useState } from 'react'

export default function CounterHooks( { initialCount } ) {
    // eslint-disable-next-line no-lone-blocks
    const [state, setState] = useState({ count: initialCount }); {/* destructuring the returned 2-value array from useState */}
    return (
        <div>
            <button onClick={() => setState({count: state.count-1 })}>-</button>
            <span> {state.count} </span>
            <button onClick={() => setState({count: state.count+1 })} >+</button>
        </div>
        )
}