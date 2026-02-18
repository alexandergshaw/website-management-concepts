import { createTheme } from "@mui/material/styles";

export const demoTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#f5f5f5",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});
