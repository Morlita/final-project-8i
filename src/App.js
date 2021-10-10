import './App.css';
import NewNavbar from './Components/Navbar/NewNavbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import CategoriesComponent from './Components/CategoriesComponent/CategoriesComponent';
import Signin from './Components/SingIn/SignIn';
import Login from './Components/LogIn/LogIn';
import Recipe from './Components/Recipe/Recipe';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import UserProfile from './Components/UserProfile/UserProfile';
import Admin from './Components/Admin/Admin';
import AdminRecipes from './Components/Admin/AdminRecipes/AdminRecipes';
import AdminUsers from './Components/Admin/AdminUsers/AdminUsers';
import AdminTags from './Components/Admin/AdminTags/AdminTags';
import DisplayRecipes from './Components/DisplayRecipes/DisplayRecipes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MainCarousel from './Components/MainCarousel/MainCarousel';

function App() {
  const user = JSON.parse(localStorage.getItem("registerLogIn"));

  return (
    <Router>
      <ScrollToTop />
      <div className='main-background'>
        <NewNavbar/>
        <div>
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
            <Route path='/categories/:category' >
              <CategoriesComponent />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
            <Route path='/login' >
              <Login />
            </Route>
            <Route path='/recipe' >
              <Recipe />
            </Route>
            <Route path='/displayrecipes' >
              <DisplayRecipes />
            </Route>
            <Route path="/userprofile">
              <UserProfile />
            </Route>
            <Route path='/admin/recipes'> 
              {/*return user && user.role === "admin" ? <div><Admin /><AdminRecipes /></div>: <Redirect to="/"/>}}>*/}
              <Admin /><AdminRecipes />
            </Route>
            <Route path='/admin/users' render={() => {
              return user && user.role === "admin" ? <div><Admin /><AdminUsers /></div>: <Redirect to="/"/>}}>              
            </Route>
            <Route path='/admin/tags' render={() => {
              return user && user.role === "admin" ? <div><Admin /><AdminTags /></div>: <Redirect to="/"/>}}>              
            </Route>
          </Switch>
        </div>
        <MainCarousel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;