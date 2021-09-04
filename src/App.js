import './App.css';
import Categories from './Components/Categories';

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
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
