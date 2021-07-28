
import React,{Component} from 'react'
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import Homepage from './pages/Homepage'
import GlobalStyle from './globalStyles'

import SignUp from './pages/Register'
import SignIn from './pages/Login'
import { auth,handleUserProfile } from './firebase/Utils'
import MainLayout from './components/mainLayout'

const initialState = {
  currentUser: null
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }
   authListener =  null; 

   componentDidMount() {
     this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({
        ...initialState
      })

     });
   }

   componentWillUnmount(){
     this.authListener();
   }

   render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
      <GlobalStyle/>
     
        <Switch>
          <Route exact path="/" render={() => (
            <MainLayout currentUser={currentUser}>
                 <Homepage />
            </MainLayout>
         
          )} />
          <Route path ="/Register"  
          render={() => currentUser ? <Redirect to="/"/> : (
            <MainLayout currentUser={currentUser}>
                 <SignUp />
            </MainLayout>
         
          )} />
          <Route path ="/Login"  
          render={() => currentUser ? <Redirect to="/"/> : (
            <MainLayout currentUser={currentUser}>
                 <SignIn />
            </MainLayout>
         
          )} />
        </Switch>
      </BrowserRouter>
    );
   }
  
}

export default App;
