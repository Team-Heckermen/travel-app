import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestrictedRoute from "./utils/RestrictedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RestrictedPage from "./pages/RestrictedPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <RestrictedRoute component={RestrictedPage} exact path="/restricted" />
      </Router>
    </div>
  );
}

export default App;
