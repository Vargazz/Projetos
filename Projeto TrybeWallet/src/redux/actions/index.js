export const GET_USER_INFORMATION = 'GET_USER_INFORMATION';
export const FETCH_REQUISITION = 'FETCH_REQUISITION';
export const SEND_CURRENCY = 'SEND_CURRENCY';
export const ADD_EXPENSES_INFORMATIONS = 'ADD_EXPENSES_INFORMATIONS';
export const DELETE_EXPENSE_INFORMATIONS = 'DELETE_EXPENSE_INFORMATIONS';

export const getUserAction = (payload) => ({
  type: GET_USER_INFORMATION,
  payload,
});

function fetchAPILoading() {
  return {
    type: FETCH_REQUISITION,
    payload: true,
  };
}

function fetchLoadingCompleted() {
  return {
    type: FETCH_REQUISITION,
    payload: false,
  };
}

function sendAPIRequest(data) {
  return {
    type: SEND_CURRENCY,
    payload: data,
  };
}

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(fetchAPILoading());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(sendAPIRequest(Object.keys(data)));
    dispatch(fetchLoadingCompleted);
  };
}

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES_INFORMATIONS,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE_INFORMATIONS,
  payload,
});
