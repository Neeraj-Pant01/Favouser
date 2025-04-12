import axios from "axios"

export const makeApiRequest =  (token) =>{
    const instance =  axios.create({
        baseURL:`${import.meta.env.VITE_APP_URI}`,
        headers:{
            "Authorization":`bearer ${token}`
        }
    })

    return instance;
}