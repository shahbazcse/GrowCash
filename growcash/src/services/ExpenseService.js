import axios from "axios";

const api = "https://grow-cash-backend.vercel.app";

export const fetchExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });

    const response = await axios.get(`${api}/expenses`);

    if (response.status === 200) {
      dispatch({
        type: "FETCH_EXPENSES_SUCCESS",
        payload: response.data.expenses,
      });
    }
  } catch (error) {
    console.error("Error fetching expense data: ", error);
    dispatch({ type: "FETCH_EXPENSES_FAILURE" });
  }
};

export const addExpense = (expense) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/expenses`, {
      expenseData: expense,
    });

    if (response.status === 201) {
      dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: response.data.expense });
    }
  } catch (error) {
    console.error("Error adding entry: ", error);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};
