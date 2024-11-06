import axios from 'axios'

const API = axios.create({baseURL: 'https://aquaverse.onrender.com/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}` 
    }
    return req
})


export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);

export const fetchProject = (id) => API.get(`/projects/${id}`)
export const fetchProjects = (page) => API.get(`/projects?page=${page}`)
export const createProject = (newBlog) => API.post('/projects', newBlog)
export const likeProject = (id) => API.patch(`${'/projects'}/${id}/likeBlog`)

export const fetchConversation = (id) => API.get(`/conversations`)
export const createConversation = (newConversation) => API.post('/conversations', newConversation)