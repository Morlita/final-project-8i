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
import UploadRecipeBanner from './Components/UploadBanner/UploadBanner';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path='/' exact>
              <UploadRecipeBanner />
              <CategoriesCards />
              <div className="container my-3 carousel">
                <h2 className="slider_title">Favoritos de todos los tiempos</h2>
                <CarouselSlider />
              </div>
              <Tags />
            </Route>
          </Switch>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;