import request from '../../utils/request'
import {api} from '../../utils/config'
import {companyId} from '../../utils'

const {productMakeList,getOneProductmake} = api;
export function queryProductMakeList(page,size){
    return request(`${productMakeList}?page=${page}&size=${size}&companyid=${companyId}`,{
        method:'POST'
    })
}

export function queryOneProductMake(page,size,productmakeid){
    return request(`${getOneProductmake}?page=${page}&size=${size}&productmakeid=${productmakeid}`,{
        method:'POST'
    })
}

 