import { createTheme } from "@material-ui/core/styles";

const mainPrimary = "#57d19d";
const textSecondary = "#FFFFFF";
const secondaryMain = "#b1aeb3";

const theme = createTheme({
  palette: {
    primary: {
      main: mainPrimary,
      contrastText: textSecondary,
    },
    secondary: {
      main: secondaryMain,
      contrastText: "#000000",
    },
    text: {
      primary: textSecondary,
    },
  },
  mixins: {
    centerAligned: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  typography: {
    h2: {
      fontSize: "5rem",
      lineHeight: "6rem",
      color: mainPrimary,
      fontWeight: "lighter",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    h3: {
      fontWeight: "lighter",
    },
    subtitle1: {
      fontSize: "1rem",
      lineHeight: "1.75rem",
      letterSpacing: "0.009375rem",
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.025rem",
      textTransform: "unset",
      borderRadius: 5,
      width: 300,
      fontWeight: 600,
    },
  },
  props: {
    MuiButton: {
      color: "primary",
      variant: "contained",
    },
    MuiTextField: {
      variant: "filled",
      required: true,
      color: "secondary",
      fullWidth: true,
      inputProps: {
        style: {
          color: "#000000",
          backgroundColor: textSecondary,
          border: `1px solid ${secondaryMain}`,
          borderRadius: 4,
        },
      },
      InputProps: {
        disableUnderline: true,
      },
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: "#000000",
        textAlign: "left",
      },
    },
  },
});

export default theme;
