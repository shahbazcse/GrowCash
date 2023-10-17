import axios from "axios";

const api = "https://growcashbackend.shahbazahmad12.repl.co";

export const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });

    const response = await axios.get(`${api}/savings`);
    
    if (response.status === 200) {
      dispatch({
        type: "FETCH_SAVINGS_SUCCESS",
        payload: response.data.savings,
      });
    }
  } catch (error) {
    console.error("Error fetching savings data: ", error);
    dispatch({ type: "FETCH_SAVINGS_FAILURE" });
  }
};

export const addSaving = (saving) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/savings`, {
      savingData: saving,
    });

    if (response.status === 201) {
      dispatch({ type: "ADD_SAVING_SUCCESS", payload: response.data.saving });
    }
  } catch (error) {
    console.error("Error adding entry: ", error);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};
