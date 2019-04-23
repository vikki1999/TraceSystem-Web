import request from '../../utils/request'
import {api} from '../../utils/config'
import {companyId} from '../../utils'

const {selectDesigner} = api;
export function queryDesignerList(page,size){
    return request(`${selectDesigner}?page=${page}&size=${size}&companyid=${companyId}`,{
        method:'POST'
    })
}
 

