import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import CreateHeroPage from './pages/CreateHeroPage';
import MainPage from './pages/MainPage';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create">Create</NavLink></li>
        </ul>
      </nav>


      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/create" component={CreateHeroPage}/>
      </Switch>
    </Router>
  );
}

export default App;
