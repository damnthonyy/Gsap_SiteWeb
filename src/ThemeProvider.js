import React, { createContext, useContext, useState } from 'react';

// Création du contexte de thème
const ThemeContext = createContext();

// Fournisseur de thème
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Valeur initiale du thème

    // Bascule entre le mode sombre et le mode clair
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte de thème
export const useTheme = () => useContext(ThemeContext);
