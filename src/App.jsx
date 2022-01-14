
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/"   element={  <HomePage />}/>
          <Route exact path="/login"   element={  <Login/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
