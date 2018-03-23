import axios from '../../axios-infoItems';


export const FETCH_ITEMS_LIST = 'FETCH_ITEMS_LIST';
export const FETCH_ITEMS_LIST_REQUEST = 'FETCH_ITEMS_LIST_REQUEST';
export const FETCH_ITEMS_LIST_SUCCESS = 'FETCH_ITEMS_LIST_SUCCESS';
export const FETCH_ITEMS_LIST_ERROR = 'FETCH_ITEMS_LIST_ERROR';




export const fetchItemsListRequest = () => {
    return {type: FETCH_ITEMS_LIST_REQUEST};
};

export const fetchItemsListSuccess = (items) => {
    return {type: FETCH_ITEMS_LIST_SUCCESS, items}
};

export const fetchItemsListError = () => {
    return {type: FETCH_ITEMS_LIST_ERROR}
};


export const fetchItemsList = () => {
    return dispatch => {
        dispatch(fetchItemsListRequest());
        axios.get('/pics.json').then(response => {
            dispatch(fetchItemsListSuccess(response.data));
        }, error => {
            dispatch(fetchItemsListError());
        });
    }
};