
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/"   element={  <HomePage />}/>
          <Route exact path="/login"   element={  <Login/>}/>
          <Route exact path="/register"   element={  <Register/>}/>
          <Route exact path="/dashboard"   element={  <Dashboard/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
