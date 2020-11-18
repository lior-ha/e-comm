import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

class App extends React.Component { 
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { // Opening a subscription to firebase
            this.setState({ currentUser: user })
        })
    }

    componentWillUnmount() { // Closing the subscription so there won't be any memory leaks
        this.unsubscribeFromAuth();
    }

    render() { 
        return (
        <div>
            <Header currentUser={this.state.currentUser} />
            <Switch> {/* Switch - Optionl - Makes the code render the first hit from the Routes */}
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignOutPage} />
            </Switch>
        </div>
    )};
}

export default App;
