import {api} from '../utils/config'
import request from '../utils/request'
const {getLocals,selectUserById} = api

export function Locals(){
    return request(`${getLocals}`,{method:'POST'})
}

export function getById(userid){
    return request(`${selectUserById}?id=${userid}`,{method:'POST'})
}