import request from '../../utils/request'
import {api} from '../../utils/config'

const { distributeList,addDistribute,updateDistribute,removeDistribute } = api;
export function query(page,size,companyid){
    return request(`${distributeList}?page=${page}&size=${size}&companyid=${companyid}`,{
        method:'POST'
    })
}


export function add({values}){
    console.log(values);
    return request(`${addDistribute}?distributeid=${values.distributeid}&distributename=${values.distributename}
                    &address=${values.address}&companyid=${values.companyid}&createdate=${values.createdate}`,{
        method:'POST',
    })
}

export function update({values}){
    return request(`${updateDistribute}?distributeid=${values.distributeid}&distributename=${values.distributename}
    &address=${values.address}&companyid=${values.companyid}&createdate=${values.createdate}`,{
        method:'POST',
    })
}

export function remove({id}){
    return request(`${removeDistribute}?id=${id}`,{
        method:'POST'
    })
}

