import { MODAL__CHANGE, USER_NAME } from "../types"



const initialState = {
    userData: {
        name:"",
        email:"",
        pledge:false,
        pledge1:false

    },
    modal:false
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case USER_NAME:
        console.log("in reducer",payload);
        return {userData: payload}

    case MODAL__CHANGE:
        
        return { modal: payload}

    default:
        return state
    }
}
export default reducer
