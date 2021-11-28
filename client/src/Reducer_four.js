const Reducer_four = (state = null,action) => {
    switch (action.type) {
        case "FOLLOWING" :
            return action.payload
       default: return state
    }
  }
  
  export default Reducer_four