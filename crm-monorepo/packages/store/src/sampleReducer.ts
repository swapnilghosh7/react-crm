const initialState = {
    data: null,
  };
  
  const sampleReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default sampleReducer;
  