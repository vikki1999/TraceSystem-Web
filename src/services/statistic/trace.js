import request from '../../utils/request'
import {api} from '../../utils/config'
import {companyId} from '../../utils'

const { getAllSuppliers,getSuppliers } = api;
export function querySupplierLocal(){
    return request(`${getAllSuppliers}`,{
        method:'POST'
    })
}

export function querySupplier(page,size){
    return request(`${getSuppliers}?page=${page}&size=${size}&companyid=${companyId}`,{
        method:'POST'
    })
}
