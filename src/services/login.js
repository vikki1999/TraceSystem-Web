import request from '../utils/request'
import {api} from '../utils/config'

const {login} = api

export function userLogin(username,password){
    return request(`${login}?username=${username}&password=${password}`,{
        method:'POST',
    })
}