import * as ActionTypes from './ActionTypes';
export const Data = (state = { isLoading: true,
    errMess: null,
    data:[],selectedData:{}}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DATA:
            return {...state, isLoading: false, errMess: null, data: action.payload};

        case ActionTypes.DATA_LOADING:
            return {...state, isLoading: true, errMess: null, data: []}

        case ActionTypes.DATA_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.SELECTED_DATA:
            return {...state, isLoading: false, errMess: null, selectedData: action.payload}

        default:
            return state;
    }
};