const SET_MODAL = 'SET_MODAL';
const defaultState = {
    isModal: true
}

export default function userReducer(state = defaultState, action) {
    switch(action.type) {
     case SET_MODAL:
    return {
        ...state,
        isModal: action.payload
    }
    default: 
        return state
}
}

export const setModal = (bool) => 
({type:SET_MODAL, payload:bool})