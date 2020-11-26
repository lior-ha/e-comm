import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching // WithSpinner is expecting isLoading
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
// more readable, especially if there are more HOCs
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview); 

export default CollectionsOverviewContainer;