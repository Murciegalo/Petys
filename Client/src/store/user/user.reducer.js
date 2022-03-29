const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case value:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
