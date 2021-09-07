import './App.css';
import CategoriesCards from './Components/CategoriesCards';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <CategoriesCards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
