import ShopActionTypes from './shop.type';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        
    }
};



// const { updateCollections } = this.props;
// const collectionRef = firestore.collection('collections');

// Using promise (fetch) pattern
// Possible but not recommended here - very nested:
// fetch('https://firestore.googleapis.com/v1/projects/mashop-e4c33/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections));

// Using promise (get) pattern
    // get makes an api call to fetch the data associsated with CollectionRef
    // Unlike using the firebase Observer, data will only update when shop is remounted
// collectionRef.get().then( snapshot => {
//     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);
//     this.setState({loading: false});
// });

// Using firebase Observer:
// this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);
//     this.setState({loading: false});
// });