export const updateBonus =() =>{
    return{
        type: "UPDATE_BONUS",
        payload: 100
    }
}

export const levelCompleted =() =>{
    return{
        type: "LEVEL_COMPLETED",
        payload: 500
    }
}

export const lifeLost =() =>{
    return{
        type: "LIFE_LOST",
        payload: 250
    }
}
