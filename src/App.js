import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
<<<<<<< HEAD
import CategoriesComponent from './Components/CategoriesComponent/CategoriesComponent';
=======
import Signin from './Components/SingIn/SignIn';
import Login from './Components/LogIn/LogIn';
import Recipe from './Components/Recipe/Recipe';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


>>>>>>> 01dac8340e8214cb53e48de6862f299a66bb0d48


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
<<<<<<< HEAD
            <Route path='/categories' >
              <CategoriesComponent />
=======
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path='/login' >
              <Login />
            </Route>
            <Route path='/recipe' >
              <Recipe />
>>>>>>> 01dac8340e8214cb53e48de6862f299a66bb0d48
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;