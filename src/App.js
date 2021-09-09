import './App.css';
import CategoriesCards from './Components/CategoriesCards/CategoriesCards';
import Tags from './Components/Tags/Tags';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CarouselSlider from './Components/CarouselSlider/CarouselSlider';

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
            <CarouselSlider />
            <Tags />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;