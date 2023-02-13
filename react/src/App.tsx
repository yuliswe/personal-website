import { HomePage } from "./connected-components/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppContextType } from "./AppContext";

function App() {
  const defaultTheme = createTheme();
  const mediaQueryXs = useMediaQuery(defaultTheme.breakpoints.down("sm"));
  const mediaQuerySm = useMediaQuery(defaultTheme.breakpoints.down("md"));
  const mediaQueryMd = useMediaQuery(defaultTheme.breakpoints.down("lg"));
  const theme = createTheme({
    // spacing: [0, 4, 8, 16, 32, 64],
    // spacing: (factor: number) => `${0.25 * factor}rem`,
    spacing: mediaQuerySm ? 2 : mediaQueryMd ? 4 : 8,
    palette: {
      background: {
        default: "black",
        paper: "#ffffff90",
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
    },
  });
  const specialThemeWithConstantSpacing = createTheme({
    spacing: 8,
  });
  return (
    <AppContextType.Provider
      value={{
        mediaQuery: { sm: mediaQuerySm, md: mediaQueryMd, xs: mediaQueryXs },
        specialThemeWithConstantSpacing,
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage></HomePage>
      </ThemeProvider>
    </AppContextType.Provider>
  );
}

export default App;
