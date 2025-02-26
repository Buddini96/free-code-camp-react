import { Route, Routes } from "react-router-dom";
import TravelJournal from "./Pages/TravelJournal";
import Navbar from "./Components/Navbar";
import ChefClaude from "./Pages/ChefClaude";
import UserContact from "./Pages/UserContact";


function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TravelJournal />} />
      <Route path="/chef" element={<ChefClaude />} />
      <Route path="/user" element={<UserContact />} />
    </Routes>
    </>
  );
}

export default App;
