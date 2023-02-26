
const initialState = {
};
  
  const RootReducer = (state = initialState, action) => 
  {
    switch(action)
    {
      case "SETNAVIGATE":
        return {
          ...state
        }
    }
  };
  
  export default RootReducer;
