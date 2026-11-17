import React, { useState } from 'react'

const useTheme = (initialTheme = "light") => {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    };

    return { theme, toggleTheme };
};

export default useTheme;