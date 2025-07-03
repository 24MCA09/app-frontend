//import axios
import axios from 'axios'

export const commonAPI = async (httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}//in our project there are two type of content.if the request contains photos from the systems then its datatype should be multipart/form-data .in all other case the request will be application/json
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}