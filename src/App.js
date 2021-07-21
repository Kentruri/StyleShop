
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path ="/Register" component={Register}/>
        <Route path ="/Login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
