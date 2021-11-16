import logo from './logo.svg';
import './App.css';
import AppCars from './pages/AppCars';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">Vivify AppCars</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item">
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to='/cars' className="nav-link">Cars</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="container">
        <Switch>
          <Route exact path="/cars">
            <AppCars></AppCars>
          </Route>
          <Route exact path={`/`}>
            <Redirect to='/cars' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
