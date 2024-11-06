import { AUTH } from "../constants/actionTypes";
import * as api from './../api';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.signin(formData);
        console.log(data)
        dispatch({type: AUTH, data})
        navigate('/')
        window.location.reload(false)
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.signup(formData);
        console.log(data)
        dispatch({type: AUTH, data})
        navigate('/')
        window.location.reload(false)
    } catch (error) {
        console.log(error)
    }
}