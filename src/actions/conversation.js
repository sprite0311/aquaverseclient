import * as api from '../api';
import { FETCH_MSG, CREATE_MSG } from '../constants/actionTypes';

export const createConversation = (newConversation) => async (dispatch) => {
    const {data} = await api.createConversation(newConversation);
    dispatch({type: CREATE_MSG, payload: data})
    console.log(data)
}
export const fetchConversation = () => async (dispatch) => {
    const {data} = await api.fetchConversation();
    console.log(data.conversation)
    dispatch({type: FETCH_MSG, payload: data})
}