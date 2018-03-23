import {FETCH_ITEMS_LIST, FETCH_ITEMS_LIST_ERROR, FETCH_ITEMS_LIST_REQUEST, FETCH_ITEMS_LIST_SUCCESS} from "./actions";


const initialState = {
    items: [],
    loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_ITEMS_LIST:
          return {...state, items: action.items.data.children};
      case FETCH_ITEMS_LIST_REQUEST:
          return {...state, loading: true};
      case FETCH_ITEMS_LIST_SUCCESS:
          return {...state, items: state.items.concat(action.items.data.children) || {}, loading: false};
      case FETCH_ITEMS_LIST_ERROR:
          return {...state, loading: false};
      default:
          return state;
  }
};

export default reducer;