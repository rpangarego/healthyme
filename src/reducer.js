export const initialState = {
  exercises: [],
  exercisePlaylist: null,
  foods: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_FOODS":
      return { ...state, foods: action.foods };

    case "SET_EXERCISES":
      return { ...state, exercises: action.exercises };

    case "SET_EXERCISEPLAYLIST":
      return { ...state, exercisePlaylist: action.exercisePlaylist };

    default:
      return state;
  }
};

export default reducer;
