import request from '../../utils/request'
import {api} from '../../utils/config'
import {companyId} from '../../utils'

const { technologyList,addTechnology,updateTechnology,removeTechnology } = api;
export function query(page,size){
    return request(`${technologyList}?page=${page}&size=${size}&companyid=${companyId}`,{
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
    return request(`${addTechnology}?technologyname=${values.technologyname}&note=${values.note}
    &patentid=${values.patentid}&patentcategory=${values.patentcategory}&companyid=${companyId}`,{
        method:'POST',
    })
}

export function update({technologyid,values}){
    return request(`${updateTechnology}?technologyid=${technologyid}&technologyname=${values.technologyname}}
                    &note=${values.note}&patentid=${values.patentid}&patentcategory=${values.patentcategory}`,{
        method:'POST',
    })
}

export function remove({id}){
    return request(`${removeTechnology}?id=${id}`,{
        method:'POST'
    })
}