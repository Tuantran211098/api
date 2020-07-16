import Axios from 'axios'
import * as Config from './../constants/config'
export default function CallApi (endpoind,method,body){
    return(
        Axios({
            method:method,
            url:`${Config.API}/${endpoind}`,
            data:body
        }).catch(err=>{
            console.log(err)
        })
    )
}