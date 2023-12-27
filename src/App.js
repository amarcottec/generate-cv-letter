import CVGenerated from "./components/CVGenerated";
import LetterGenerated from "./components/LetterGenerated";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <>
    <Navbar/>
    <div >
      <Routes>
        <Route path="/" element={<CVGenerated />} />
        <Route path="/cv" element={<CVGenerated/>} />
        <Route path="/letter" element={<LetterGenerated/>} />
      </Routes>
      </div>  
    </>
  );
}

export default App;

