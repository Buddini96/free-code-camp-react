import { Route, Routes } from "react-router-dom";
import TravelJournal from "./Pages/TravelJournal";
import Navbar from "./Components/Navbar";
import ChefClaude from "./Pages/ChefClaude";


function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TravelJournal />} />
      <Route path="/chef" element={<ChefClaude />} />
    </Routes>
    </>
  );
}

export default App;
