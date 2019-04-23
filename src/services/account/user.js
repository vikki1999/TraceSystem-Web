import request from '../../utils/request'
import {api} from '../../utils/config'
import {companyId} from '../../utils'

const {userList,selectUserById,selectUserByName,addUser,deleteUser,updateUser,search} = api;
export function queryUserList(page,size){
    return request(`${userList}?page=${page}&size=${size}&companyid=${companyId}`,{
        method:'POST'
    })
}
 
export function select(page,size,id,keyword){
    return request(`${search}?page=${page}&size=${size}&id=${id}&keyword=${keyword}`,{
        method:'POST'
    })
}

export function selectById({id}){
    return request(`${selectUserById}?id=${id}`,{
        method:'POST'
    })
}

export function selectByName({name}){
    return request(`${selectUserByName}?name=${name}`,{
        method:'POST'
    })
}

export function add({values}){
    console.log(values);
    return request(`${addUser}?username=${values.username}&loginpwd=${values.loginpwd}&mobilephone=${values.mobilephone}
                    &email=${values.email}&local=${values.local}&gender=${values.gender}&createtime=${values.createtime}
                    &roleid=${values.roleid}&companyid=${companyId}`,{
        method:'POST',
    })
}

export function update({userid,values}){
    return request(`${updateUser}?userid=${userid}&username=${values.username}&loginpwd=${values.loginpwd}
                    &mobilephone=${values.mobilephone}&email=${values.email}&local=${values.local}&gender=${values.gender}
                    &createtime=${values.createtime}&roleid=${values.roleid}&companyid=${companyId}`,{
        method:'POST',
    })
}

export function remove({id}){
    return request(`${deleteUser}?id=${id}`,{
        method:'POST'
    })
}