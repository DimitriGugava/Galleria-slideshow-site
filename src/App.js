import Main from "./main/main";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slideshow from "./slideshow/slideshow";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:imageID" element={<Slideshow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
