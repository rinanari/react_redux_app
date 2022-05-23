const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST'



const defaultState = {
    
    
}

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_ACTIVE_LIST:
            return {
                ...state,
                isActive: action.payload
            }
         default: 
            return state
    }
}
export const setActiveList = (bool) => (
    {type:SET_ACTIVE_LIST, payload: bool }
)


