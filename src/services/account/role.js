import request from '../../utils/request'
import {api} from '../../utils/config'

const {roleList,getRoleById} = api;
export function queryRoleList(page,size){
    return request(`${roleList}?page=${page}&size=${size}`,{
        method:'POST'
    })
}
 

export function selectById({id}){
    return request(`${getRoleById}?id=${id}`,{
        method:'POST'
    })
}
