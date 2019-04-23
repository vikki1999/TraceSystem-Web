import request from '../../utils/request'
import {api} from '../../utils/config'

const { companyList,addCompany,updateCompany,removeCompany,selectCompanyById } = api;
export function query(page,size){
    return request(`${companyList}?page=${page}&size=${size}`,{
        method:'POST'
    })
}

// export function select(page,size,id,keyword){
//     return request(`${search}?page=${page}&size=${size}&id=${id}&keyword=${keyword}`,{
//         method:'POST'
//     })
// }

export function add({values}){
    console.log(values);
    return request(`${addCompany}?companyid=${values.companyid}&companyname=${values.companyname}
                    &abbreviation=${values.abbreviation}&certificate=${values.certificate}
                    &address=${values.addresss}&parentid=${values.parentid}&createtime=${values.createtime}`,{
        method:'POST',
    })
}

export function update({companyid,values}){
    return request(`${updateCompany}?companyid=${companyid}&companyname=${values.companyname}
    &abbreviation=${values.abbreviation}&certificate=${values.certificate}
    &address=${values.addresss}&parentid=${values.parentid}&createtime=${values.createtime}`,{
        method:'POST',
    })
}

export function remove({id}){
    return request(`${removeCompany}?id=${id}`,{
        method:'POST'
    })
}

export function getById(id){
    return request(`${selectCompanyById}?id=${id}`,{
        method:'POST'
    })
}
