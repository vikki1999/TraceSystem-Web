import request from '../../utils/request'
import {api} from '../../utils/config'

const { brandList,addBrand,updateBrand,removeBrand } = api;
export function query(page,size){
    return request(`${brandList}?page=${page}&size=${size}`,{
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
    return request(`${addBrand}?brandid=${values.brandid}&brandname=${values.brandname}
                    &history=${values.history}&category=${values.category}
                    &createtime=${values.createtime}&companyname=${values.companyname}&src=${values.src}`,{
        method:'POST',
    })
}

export function update({brandid,values}){
    return request(`${updateBrand}?brandid=${brandid}&brandname=${values.brandname}
    &history=${values.history}&category=${values.category}
    &createtime=${values.createtime}&companyname=${values.companyname}&src=${values.src}`,{
        method:'POST',
    })
}

export function remove({id}){
    return request(`${removeBrand}?id=${id}`,{
        method:'POST'
    })
}