import { Theme } from "@mui/material";
import React from "react";

export const mediaQuery = {
  sm: false,
  md: false,
  xs: false,
};

export const defaultAppContext = {
  mediaQuery: mediaQuery,
  specialThemeWithConstantSpacing: null as Theme | null,
};

export const AppContextType = React.createContext(defaultAppContext);
export type AppContext = typeof defaultAppContext;
