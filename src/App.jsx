
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/"   element={  <HomePage />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
