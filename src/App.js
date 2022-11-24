import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext() // 2 parts  1 provider to pass vals, 1 consumer which consumes vals
//must use state to rerender app in order to change context
//DEPLOYED TO app.netlify.com/sites/illustrious-lily-96ac3b/overview


function App() {


  const [theme, setTheme] = useState('green')

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }} >
    {/* counter and counter hooks can now access provider */}
      Counter
      <Counter initialCount={0} />
      Counter Hooks
      <CounterHooks initialCount={3} />
      {/* create a button to toggle theme */}
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue':'red' 
        }) 
        }> Toggle Theme </button>
      
    </ThemeContext.Provider>
  )
}

export default App;
