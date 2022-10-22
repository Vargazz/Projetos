import {
  FETCH_REQUISITION,
  SEND_CURRENCY,
  ADD_EXPENSES_INFORMATIONS,
  DELETE_EXPENSE_INFORMATIONS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_REQUISITION:
    return {
      ...state,
      loading: action.payload,
    };
  case SEND_CURRENCY:
    return {
      ...state,
      currencies: action.payload,

    };
  case ADD_EXPENSES_INFORMATIONS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE_INFORMATIONS:
    return {
      ...state,
      expenses: [...action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
