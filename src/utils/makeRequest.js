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


export function loadRazorpayScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}