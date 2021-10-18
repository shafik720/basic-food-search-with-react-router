
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Restaurant from './Components/Restaurant/Restaurant';
import Food from './Components/Food/Food';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Restaurant></Restaurant>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/restaurant'>
            <Restaurant></Restaurant>
          </Route>
          <Route path='/foods/:foodId'>
            <Food></Food>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
