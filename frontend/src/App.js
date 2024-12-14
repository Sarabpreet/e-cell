import logo from "./placeholder.svg";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import MeetTheTeam from './pages/Meettheteam';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/MeetTheTeam" element={<MeetTheTeam />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
