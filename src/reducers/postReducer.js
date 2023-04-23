const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETECH_POST':
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
