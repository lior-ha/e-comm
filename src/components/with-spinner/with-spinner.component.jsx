import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

// HOC - Higher Order Component
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        console.log('isLoading', isLoading);
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }

    return Spinner
}

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