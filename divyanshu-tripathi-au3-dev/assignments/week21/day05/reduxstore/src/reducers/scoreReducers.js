const initialState = {
    currentScore : 0
}

const scoreReducer = (state = initialState , action) =>{
    switch(action.type){
        case "UPDATE_BONUS":
            return{
                ...state,
                currentScore:  state.currentScore + action.payload
            }

        case "LEVEL_COMPLETED":
            return{
                ...state,
                currentScore:  state.currentScore + action.payload
            }

        case "LIFE_LOST":
            return{
                ...state,
                currentScore:  state.currentScore - action.payload
            }

          default:  return state
        
    }
}

export default scoreReducer;