import React from 'react';
import { ThemeContextProvider } from './ThemeContext';
import Header from './Header';
import './css/App.css';

const App = (props) => {

    return (
        <div className="App">
            <ThemeContextProvider>
                <Header />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
