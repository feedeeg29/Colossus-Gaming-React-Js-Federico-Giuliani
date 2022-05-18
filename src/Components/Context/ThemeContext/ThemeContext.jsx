import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false && (JSON.parse(localStorage.getItem("clDarkTheme")) != null ? JSON.parse(localStorage.getItem("clDarkTheme")) : false));

    const toggleDarkTheme = () => {
        setDarkTheme(theme => !theme);
    }
    useEffect(() => {
        const checkStorage = (e) => {
            const { key, newValue } = e;

            if (key === "clDarkTheme") {
                setDarkTheme(JSON.parse(newValue))
            }
        }

        window.addEventListener("storage", checkStorage)
        return (() => window.removeEventListener("storage", checkStorage))
    })

    useEffect(() => {
        localStorage.setItem("clDarkTheme", JSON.stringify(darkTheme));

        if (darkTheme === false) {
            document.body.classList.add("lightBackground")
            document.body.classList.remove("darkBackground")
        } else {
            document.body.classList.add("darkBackground")
            document.body.classList.remove("lightBackground")

        }
    }, [darkTheme])

    return (
        <>
            <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}
export default ThemeContextProvider;