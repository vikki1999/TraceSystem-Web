import request from '../../utils/request'
import {api} from '../../utils/config'

const { adminList,updateAdmin,removeAdmin } = api;
export function query(page,size,companyid){
    return request(`${adminList}?page=${page}&size=${size}&companyid=${companyid}`,{
        method:'POST'
    })
}

// export function select(page,size,id,keyword){
//     return request(`${search}?page=${page}&size=${size}&id=${id}&keyword=${keyword}`,{
//         method:'POST'
//     })
// }

// export function add({values}){
//     console.log(values);
//     return request(`${addUser}?username=${values.username}&loginpwd=${values.loginpwd}&mobilephone=${values.mobilephone}
//                     &email=${values.email}&local=${values.local}&gender=${values.gender}&power=${values.power}`,{
//         method:'POST',
//     })
// }

export function update({adminid,values}){
    return request(`${updateAdmin}?adminid=${adminid}&ethaccount=${values.ethaccount}&ethpwd=${values.ethpwd}`,{
        method:'POST',
    })
}

export function remove({id}){
    return request(`${removeAdmin}?id=${id}`,{
        method:'POST'
    })
}