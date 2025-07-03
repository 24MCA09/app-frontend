
import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"



//register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/register`,user,"")
}

//login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/login`,user,"")
}