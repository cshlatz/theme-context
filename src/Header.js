import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import logo from './logo.svg';

const Header = (props) => {
    const [theme, dispatch] = useContext(ThemeContext);

    const toggleTheme = () => {
        dispatch({type: "toggle", value: ""});
    }

    return (
        <header style={theme.style} className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <button onClick={() => toggleTheme()}>Toggle Theme</button>
        </header>
    );
}

export default Header;
