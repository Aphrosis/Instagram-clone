
const Reducer_thi = (state = null,action) => {
    switch (action.type) {
        case "ALL" :
            return action.payload
       default: return state
    }
  }
  
  export default Reducer_thi