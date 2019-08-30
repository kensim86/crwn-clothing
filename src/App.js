import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
            ...snapShot.data()
            }
          }, () =>{
            // console.log(this.state);
          })

          // console.log(this.state);
        });
        
      }
      
      this.setState({currentUser:userAuth});
      
      // this.setState({currentUser:user});
      // console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>    
    )
  }
}

export default App;
