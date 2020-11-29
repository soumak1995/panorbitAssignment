import * as ActionTypes from './ActionTypes';

export const fetchData = () => (dispatch) => {

    dispatch(dataLoading(true));

    return fetch('https://panorbit.in/api/users.json')
    .then(response => response.json())
    .then(data => dispatch(addData(data)));
}

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
});

export const dataFailed = (errmess) => ({
    type: ActionTypes.DATA_FAILED,
    payload: errmess
});

export const addData = (data) => ({
    type: ActionTypes.ADD_DATA,
    payload: data
});