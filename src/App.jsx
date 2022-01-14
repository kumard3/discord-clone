
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/"   element={  <HomePage />}/>
          <Route exact path="/login"   element={  <Login/>}/>
          <Route exact path="/register"   element={  <Register/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
