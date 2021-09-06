import './App.css';
import CategoriesCards from './Components/CategoriesCards';
import Tags from './Components/Tags/Tags';

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
            <Tags/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
