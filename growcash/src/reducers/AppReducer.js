const initialState = {
  income: [],
  expenses: [],
  savings: [],
  loading: false,
  error: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INCOME_SUCCESS":
      return {
        ...state,
        income: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_INCOME_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching income data",
      };
    case "FETCH_EXPENSES_SUCCESS":
      return {
        ...state,
        expenses: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_EXPENSES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching expense data",
      };
    case "FETCH_SAVINGS_SUCCESS":
      return {
        ...state,
        savings: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_SAVINGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching savings data",
      };
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_ENTRY_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching or adding data",
      };
    case "ADD_INCOME_SUCCESS":
      return {
        ...state,
        income: [...state.income, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_EXPENSE_SUCCESS":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        loading: false,
        error: null,
      };
    case "ADD_SAVING_SUCCESS":
      return {
        ...state,
        savings: [...state.savings, action.payload],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default AppReducer;
