import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./data.json";
import Header from "./components/Header.jsx";
import Destination from "./components/destination/Destination.jsx";
import Home from "./components/home/Home.jsx";
import Crew from "./components/crew/Crew.jsx";
import Technology from "./components/technology/Technology.jsx";

function App() {
  const { destinations, crew: crewMembers, technology: technologies } = data;

  return (
    <Router>
      <div className="App container relative text-pretty">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/destination"
              element={<Destination destinations={destinations} />}
            />
            <Route path="/crew" element={<Crew crews={crewMembers} />} />
            <Route
              path="/technology"
              element={<Technology technologies={technologies} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;