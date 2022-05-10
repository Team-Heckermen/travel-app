import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestrictedRoute from "./utils/RestrictedRoute";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Route component={Home} exact path="/" />
          <Route component={Login} exact path="/login" />
          {/* <RestrictedRoute
            component={error_403}
            exact
            path="/restricted"
          /> */}
          <Route path="*" component={PageNotFound} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
