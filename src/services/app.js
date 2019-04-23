import request from '../utils/request'
import {api} from '../utils/config'

const { findMenu,getChildren } = api;
export function queryMenu(moudelid){
    return request(`${findMenu}?moudelid=${moudelid}`,{
        method:'POST'
    })
}

export function getMenuChildrens(key){
    return request(`${getChildren}?key=${key}`,{
        method:'POST'
    })
}

