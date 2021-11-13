import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import CarsHome from "./Pages/Home/Cars/CarsHome/CarsHome";
import Footer from "./Pages/Footer/Footer";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking/Booking";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard/Dashboard";


function App() {
  return (
      <div className="App">
          <AuthProvider>
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/home">
                          <Home />
                      </Route>
                      <Route path="/login">
                          <Login />
                      </Route>
                      <Route path="/register">
                          <Register />
                      </Route>
                      <Route path="/cars">
                          <CarsHome></CarsHome>
                      </Route>
                      <Route path="/aboutUs">
                          <About></About>
                      </Route>
                      <PrivateRoute path="/dashboard">
                          <Dashboard />
                      </PrivateRoute>
                      <PrivateRoute path="/booking/:serviceId">
                          <Booking></Booking>
                      </PrivateRoute>
                      <Route path="*">
                          <NotFound></NotFound>
                      </Route>
                  </Switch>
              </Router>
          </AuthProvider>
      </div>
  );
}

export default App;
