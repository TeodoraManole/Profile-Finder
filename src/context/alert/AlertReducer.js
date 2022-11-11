const alertReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload
    
        case 'REMOVE_ALERT_TIMER':
            return null
        
        default: 
            return state
        }
}

export default alertReducer
