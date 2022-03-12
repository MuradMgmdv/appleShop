const addItem = []

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload]
      break;


     switch (action.type) {
        case "DELITEM":
          return state = state.filter((x) => x.id !== action.payload.id)
      }
      break;



    default: return state
      break;
  }
}

export default addItems
