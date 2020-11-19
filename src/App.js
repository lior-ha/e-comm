import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

class App extends React.Component { 
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // Opening a subscription to firebase
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {
                setCurrentUser( userAuth );
            }
        })
    }

    componentWillUnmount() { // Closing the subscription so there won't be any memory leaks
        this.unsubscribeFromAuth();
    }

    render() { 
        return (
        <div>
            <Header />
            <Switch> {/* Switch - Optionl - Makes the code render the first hit from the Routes */}
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignOutPage} />
            </Switch>
        </div>
    )};
}

// dispatch tells redux that whatever object is being passed is an action to be send to every reducer
// The action returns an object with type and payload to send to the reducer
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
