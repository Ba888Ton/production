import { createContext } from "react";

export interface ThemeContextProps {
  theme: Theme,
  setTheme: (theme: Theme) => void;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT, 
  setTheme: (theme: Theme) => {}
});

export const LOCAL_STORAGE_THEME_KEY = 'app_theme';