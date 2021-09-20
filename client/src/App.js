//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
