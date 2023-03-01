
const initialState = {
  age1:0,
  age2:30
};



const reducer = (state = initialState, action) => 
{
  let t = {...state}
  switch(action.type)
  {
    case "SET":
      t[action.field] = action.val
      return t
    case "ADD":
      t[action.field] += 1
      return t
    case "SUBTRUCT":
        t[action.field] -= 1
        return t
    default:
      return state
  }
};
  
  export default reducer;
