//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/layout/Navbar';
import Weigher from './components/Weigher';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/punnitus' component={Weigher} />
      </Switch>
    </>
  );
}

export default App;
