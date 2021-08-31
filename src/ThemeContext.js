import React, { createContext, useReducer } from 'react';

const ThemeContext = createContext([{}, () => {}]);

const themes = {
    dark: {
        name: "dark",
        style: {
            backgroundColor: "black",
            color: "white"
        }
    },
    light: {
        name: "light",
        style: {
            backgroundColor: "white",
            color: "black"
        }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "toggle":
            return state.name === "dark" ? themes.light : themes.dark;
        default:
            return {};
    }
}

const ThemeContextProvider = ({ children, value, ...rest }) => {

    const [state, dispatch] = useReducer(reducer, themes.dark);

    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider }
