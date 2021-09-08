import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Main from './Component/Main/Main';
import Login from './Component/Login/Login';
import Signin from './Component/Signin/Signin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Link to="/main">main</Link> -
          <Link to="/login">login</Link> -
          <Link to="/signin">signin</Link> -
          <Link to="/"></Link> -
          <Navbar /> 
          <div className="container">
          <Switch>
            <Route path="/main">
              <Main/>
            </Route>            
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/">
            
            </Route>
          </Switch>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
