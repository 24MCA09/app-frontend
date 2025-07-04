
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

// book ticket
export const bookTicketAPI = async(data)=>{
    return await commonAPI("POST",`${BASE_URL}/createticket`,data,"")
}
export const getMoviesAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/getmovies`)
}
export const getMoviebyIdAPI = async(id)=>{
    return await commonAPI("GET",`${BASE_URL}/getmoviebyid/${id}`)
}
export const getTicketbyidAPI = async(email)=>{
    return await commonAPI("GET",`${BASE_URL}/getticketbyid/${email}`)
}
export const createMovieAPI = async(data)=>{
    return await commonAPI("POST",`${BASE_URL}/createmovie`,data,"")
}