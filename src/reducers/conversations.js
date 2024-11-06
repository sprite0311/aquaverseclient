import { CREATE_MSG, FETCH_MSG } from "../constants/actionTypes";

const conversationReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MSG:
            return{
                ...state,
                conversations: action.payload.conversation
            }
        case CREATE_MSG:
            return{
                ...state,
                conversations: action.payload.data
            }
        default:
            return state
    }
}
export default conversationReducer
