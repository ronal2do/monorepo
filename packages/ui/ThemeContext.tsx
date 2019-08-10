import React, { createContext, useState, useMemo, useContext } from 'react';
import { LightTheme } from './theme/LightTheme';
import { DarkTheme } from './theme/DarkTheme';

export function generateTheme(themeName: string) {
  switch(themeName) {
    case 'light':
      return LightTheme;
    case 'dark':
      return DarkTheme;
    case 'purple':
      // https://en.99designs.nl/blog/trends/color-trends-2019/
      return DarkTheme;
    case 'coral':
      return DarkTheme;
    default:
      return LightTheme;
  }
}

type ThemeProps = {
  children: React.ReactElement<any>;
}

type ValueType = {
  theme: any,
  setTheme: (themeName: string) => void,
  themeName: string,
}

export const ThemeContext = createContext({ themeName: "dark", theme: DarkTheme, setTheme: () => {} })

export function ThemeProvider({ children }: ThemeProps) {
  const [ theme, setTheme ] = useState("dark") // useState starts with default value.
  const getTheme = useMemo(() => generateTheme(theme), [ theme ])
  const providedValues: any | ValueType = { 
    theme: getTheme, 
    setTheme, 
    themeName: theme 
  }

  return (
    <ThemeContext.Provider 
      value={providedValues}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const appContext = useContext(ThemeContext);
  if (appContext == null)
    throw Error('useAppContext: Please provide AppContext value.');
  return appContext;
}; 
