import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import MeetTheTeam from "./Meettheteam";
import AboutUs from "./AboutUs";
import Initiatives from "./Initiatives";

function mes() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/MeetTheTeam" element={<MeetTheTeam />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Initiatives" element={<Initiatives/>}></Route>
            <Route path="/mes" element={<mes />}></Route>
            
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default mes;
  