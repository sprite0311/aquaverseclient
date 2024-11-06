import jwt_decode from "jwt-decode";

export const createOrGetUser = async(response) => {
   const {name, sub} = jwt_decode(response.credential)
   const user = {
    _id: sub,
    _type: 'user',
    userName:name
   }
   console.log(user._id)
}