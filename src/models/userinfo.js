import * as userinfoService from '../services/userinfo'
import * as companyService from '../services/enterprise/company'
import * as userService from '../services/account/user'
import {userId,companyId} from '../utils'

export default {
    namespace: 'userinfo',
    state: {
      locals:[],
      user:[],
      companyname:'',
    },
    subscriptions: {
      setup({dispatch,history}){
        dispatch({
          type:'getUserById',
          payload:userId
        })
        dispatch({
          type:'getLocal',
        })
        dispatch({
          type:'getCompanyById',
          payload:companyId
        })
      }
    },
    effects: {
      *submit({payload:userid,values},{call,put}){
        yield call(userService.update,userid,values);
      },
      *getLocal({payload},{call,put}){
        const data=yield call(userinfoService.Locals)
        yield put({
          type:'save',
          payload:{
            locals:data.data.list
          }
        })
      },
      *getUserById({payload:userid},{put,call}){
        const u = yield call(userinfoService.getById,userid)
        // if(u!==undefined)
        yield put({
          type:'save',
          payload:{
            user:u.data,
          }
        })
      },
      *getCompanyById({payload:id},{put,call}){
        const company=yield call(companyService.getById,id)
        yield put({ 
          type: 'save',
          payload:{
            companyname:company.data.companyname,
          }
        });
      },
      
    },
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      search(state) {
          return { ...state }
      }
    }
  }