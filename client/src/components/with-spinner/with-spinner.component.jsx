import Spinner from '../spinner/spinner.component';

// WithSpinner helps with async data before we initialize the components using Higher Order Component
// (HOC), which is a component that wrappes a component and returning other components, to extend
// or reuse functionallity


// HOC - Higher Order Component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (
    isLoading ? (<Spinner />) : (<WrappedComponent {...otherProps} />)
)


// Can also be written like this:
// const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} />
//     )
// }

export default WithSpinner;