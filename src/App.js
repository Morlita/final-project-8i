import './App.css';
import CategoriesCards from './Components/CategoriesCards/CategoriesCards';
import Tags from './Components/Tags/Tags';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <CategoriesCards />
            <Tags />
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/main">
            <Main/>
          </Route> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;