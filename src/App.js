import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
