import { CssBaseline, ThemeProvider } from "@mui/material";
import CalculatorApp from "./components/CalculatorApp";
import theme from "./components/theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:'flex', justifyContent:'center'}}>
      <CssBaseline/>
      <CalculatorApp/>
    </div>
    </ThemeProvider>
  );
}

export default App;
