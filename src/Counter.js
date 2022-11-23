import React, { Component } from 'react'
import { ThemeContext }  from './App'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        return (
            <ThemeContext.Consumer> 
            {/* error - bc consumer has a function inside. put all jsx to be rendered in the function body */}
            {style => (
                <div>
                    <button onClick={() => this.changeCount(-1)} >-</button>
                    <span>{this.state.count}</span>
                    <button onClick={() => this.changeCount(+1)} >+</button>
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }

    changeCount(amount) {
        // this.setState({ count: this.state.count + amount })
        this.setState(prevState => {
            return { count: prevState.count + amount }

        })
        this.setState(prevState => {
            return { count: prevState.count + amount }

        })
    }
}