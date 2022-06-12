import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/Global.styles";
import {theme} from "./styles/Theme.styles";
import {HomePage} from "./components/pages/HomePage/Home.page";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <HomePage />
      </ThemeProvider>
  )
}

export default App
