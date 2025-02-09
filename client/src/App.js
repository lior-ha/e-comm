import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignOutPage = lazy(() => import('./pages/sign-in-and-sign-out/sign-in-and-sign-out.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
 
const App = ({ checkUserSession, currentUser }) => { 
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch> {/* Switch - Optionl - Makes the code render the first hit from the Routes */}
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
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
                    </Suspense>
                </ErrorBoundary>
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
