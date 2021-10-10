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


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainCarousel from './Components/MainCarousel/MainCarousel';

function App() {
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
            <Route path="/userprofile">
              <UserProfile />
            </Route>
            <Route path='/admin/recipes' exact>
              <Admin />
              <AdminRecipes />
            </Route>
            <Route path='/admin/users' exact>
              <Admin />
              <AdminUsers />
            </Route>
            <Route path='/admin/tags' exact>
              <Admin />
              <AdminTags />
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