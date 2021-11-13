const Reducer_sec = (state = null,action) => {
    switch (action.type) {
        case "NOOB" :
            return action.payload
       default: return state
    }
  }
  
  export default Reducer_sec