import * as adminService from '../../services/account/admin'
import {companyId} from '../../utils'

export default {

    namespace: 'admin',
  
    state: {
      list:[],
      total:0,
      page:0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        dispatch({
          type:'query',
          payload:{page:1}
        })
        // fetch('http://127.0.0.1:8080/addUser',{method: "POST", values: '{"username":"huanglei","email":"huanglei@163.com","local":"北京市","gender":"M","mobilephone":"19344596945","loginpwd":"huanglei","power":"2"}'})
        // .then(res => res.status>=200 ? res : '')
        // .then(res => res.json())
        // .then(res => console.log(res))
      },
    },
  
    effects: {
      *query({ payload:{page} }, { call, put }) {  // eslint-disable-line
        const data =yield call(adminService.query,page,10,companyId);
        console.log(data.data);
        yield put({ 
          type: 'save',
          payload:{
            list:data.data.list,
            total:data.data.total,
            page:parseInt(page, 10)
          }
       });
      },
      // *select({ payload:{page,size,id,keyword} }, { call, put }) {  // eslint-disable-line
      //   const { data } =yield call(adminService.select,{page,size,id,keyword});
      //   yield put({ 
      //     type: 'save',
      //     payload:{
      //       list:data.list,
      //       total:data.total,
      //       page:parseInt(page, 10),
      //       size:size
      //     }
      //  });
      // },
      // *create({payload:values},{call,put}){
      //   console.log(values);
      //   yield call(adminService.add,values);
      //   yield put({type:'reload'});
      // },
      *delete({payload:{id}},{call,put}){
        yield call(adminService.remove,{id});
        yield put({type:'reload'});
      },
      *update({payload:adminid,values},{call,put}){
        yield call(adminService.update,adminid,values);
        yield put({type:'reload'});
      },
      *reload(action, { put, select }) {
        const page = yield select(state => state.admin.page)
        yield put({ type: 'query', payload: { page } })
    }
    },
  
    reducers: {
      save(state, action) {
        console.log(state);
        console.log(action.payload);
        return { ...state, ...action.payload };
      },
      search(state) {
          return { ...state }
      }

    },
  
  };
  