
import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from './pages/Homepage'
import GlobalStyle from './globalStyles'
import { setCurrentUser } from './redux/User/user.actions'
import { connect } from 'react-redux'
import SignUp from './pages/Register'
import SignIn from './pages/Login'
import { auth, handleUserProfile } from './firebase/Utils'
import MainLayout from './components/mainLayout'
import RecoverPassword from './pages/RecoverPassword'
import WithAuth  from './hoc/withAuth'
import Dashboard from './pages/Dashboard'



const App = props => {

  const { currentUser, setCurrentUser } = props;
  useEffect(() => {



    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data())
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    }

  }, [])


  return (
    <div className="app">
      <GlobalStyle />

      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout >
            <Homepage />
          </MainLayout>

        )} />
        <Route path="/Register"
          render={() =>(
            <MainLayout >
              <SignUp />
            </MainLayout>

          )} />
        <Route path="/Login"
          render={() =>(
            <MainLayout >
              <SignIn />
            </MainLayout>

          )} />

        <Route path="/Recover"
          render={() => (
            <MainLayout >
              <RecoverPassword />
            </MainLayout>

          )} />

        <Route path="/Dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />


      </Switch>
    </div>
  );
}



//user es el reducer, currentUser es parte del estado inicial, y comenzara en null
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser 
});

//comnenzamos con el currentUser seteado en null

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);