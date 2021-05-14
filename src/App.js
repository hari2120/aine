import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';



function App() {
  return (
    <div className="">
     <Router>
     <Switch>
          <Route path="/users">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
