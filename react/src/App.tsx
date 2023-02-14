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
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithContext children={<HomePage />} />,
  },
  {
    path: "/:company",
    element: <WithContext children={<HomePage />} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function WithContext(props: React.PropsWithChildren) {
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
        default: "#333",
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

  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  return (
    <HelmetProvider>
      <AppContextType.Provider
        value={{
          mediaQuery: {
            sm: mediaQuerySm,
            md: mediaQueryMd,
            xs: mediaQueryXs,
          },
          routes: {
            location,
            navigate,
            params,
          },
          specialThemeWithConstantSpacing,
        }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </AppContextType.Provider>
    </HelmetProvider>
  );
}

export default App;
