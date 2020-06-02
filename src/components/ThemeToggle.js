import React from 'react'
import {ThemeContext} from '../context/ThemeContext'

class ThemeToggle extends React.Component {
   
   static contextType = ThemeContext;
    render(){
        const  {toggleTheme} = this.context
        return (
            <button onClick={toggleTheme}>Theme Toggle</button>
        )
    }
}

export default ThemeToggle;