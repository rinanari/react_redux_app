//редьюсер для страницы пользователя

const SET_USER = 'SET_USER'
const SET_FETCH_ERROR = "SET_FETCH_ERROR"

const defaultState = {
    
    data: {},
   
    isFetchError: false 
}

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                data: action.payload.data
            }
            case SET_FETCH_ERROR:
                return {
                    ...state,
                    isFetchError: action.payload
                }
         default: 
            return state
    }
}
export const setUser = (user) => (
    {type:SET_USER, payload: user }
)
export const setFetchError = (bool) => 
({type:SET_FETCH_ERROR, payload:bool})