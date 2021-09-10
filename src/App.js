import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Hello APIwalker</h1>
        <SearchForm></SearchForm>
        <Switch>
          <Route exact path="/:category/:id">
            <Display></Display>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
