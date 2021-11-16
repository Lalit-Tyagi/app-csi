import axios from 'axios'
export const  useAxios=()=>{
    axios.defaults.baseURL = process.env.BASE_URL
    return axios
}