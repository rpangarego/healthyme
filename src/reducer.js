export const initialState = {
  exercises: null,
  foods: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_FOODS":
      return { ...state, foods: action.foods };

    default:
      return state;
  }
};

export default reducer;
