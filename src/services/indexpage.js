import request from '../utils/request'
import {api} from '../utils/config'

const {traceProduct} = api

export function trace(traceid){
    return request(`${traceProduct}?traceid=${traceid}`,{
        method:'POST',
    })
}