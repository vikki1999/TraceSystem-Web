import request from '../../utils/request'
import {api} from '../../utils/config'
import {companyId} from '../../utils'

const { getSuppliers } = api;
export function query(page,size){
    return request(`${getSuppliers}?page=${page}&size=${size}&companyid=${companyId}`,{
        method:'POST'
    })
}
