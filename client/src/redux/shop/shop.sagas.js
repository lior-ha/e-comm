import { takeLatest, all, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.type';

// function* generated function
export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();

        // Call take the first argument as function or method and subsequent arguments as parameters from that function
        // i.e convertCollectionSnapshotToMap(snaphot)
        // but it lets the saga control over it
        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);

        // put is the saga's effect for taking action, just like dispatch
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error));
    }

        // collectionRef.get()
        //     .then( snapshot => {
        //         const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        //         dispatch(fetchCollectionsSuccess(collectionsMap));
        //     })
        //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    //yield takeEvery(
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}