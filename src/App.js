import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => { 
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);

    return (
        <div>
            <Header />
            <Switch> {/* Switch - Optionl - Makes the code render the first hit from the Routes */}
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route 
                    exact 
                    path='/signin' 
                    render={() => 
                        currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <SignInAndSignOutPage />
                        )
                    } 
                />
            </Switch>
        </div>
    );
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });
const mapStateToProps = createStructuredSelector({ 
    currentUser: selectCurrentUser
})


// dispatch tells redux that whatever object is being passed is an action to be send to every reducer
// The action returns an object with type and payload to send to the reducer
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
