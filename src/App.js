import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import Evaluator from "./Components/Evaluator";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Evaluator />
    </ThemeProvider>
  );
}

export default App;
