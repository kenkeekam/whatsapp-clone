// how the data layer looks before we add anything to it
export const initialState = {
    user: null,
};

// push information to data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

// switch = listener. what action did you just dispatch?
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
    case actionTypes.SET_USER: 
            return {
                ...state,
                user: action.user,
            };
// return the state that it was in
// and change user to whatever we have dispatched.
            default:
                return state;
    }
};

export default reducer;