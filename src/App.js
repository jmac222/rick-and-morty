import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import './styles/main.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Episodes/>} />
      <Route path="/characters" element={<Characters/>} />
    </Routes>
  );
}

export default App;
