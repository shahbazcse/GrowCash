import axios from "axios";

const api = "https://growcashbackend.shahbazahmad12.repl.co";

export const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });

    const response = await axios.get(`${api}/income`);
    if (response.status === 200) {
      dispatch({
        type: "FETCH_INCOME_SUCCESS",
        payload: response.data.incomes,
      });
    }
  } catch (error) {
    console.error("Error fetching income data: ", error);
    dispatch({ type: "FETCH_INCOME_FAILURE" });
  }
};

export const addIncome = (income) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/income`, {
      incomeData: income,
    });

    if (response.status === 201) {
      dispatch({ type: "ADD_INCOME_SUCCESS", payload: response.data.income });
    }
  } catch (error) {
    console.error("Error adding entry: ", error);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};