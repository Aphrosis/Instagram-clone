const Reducer_fifth = (state = null,action) => {
    switch (action.type) {
        case "POSTS" :
            return action.payload
       default: return state
    }
  }
  
  export default Reducer_fifth