import * as roleService from '../../services/account/role'
export default {

    namespace: 'role',
  
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
      },
    },
  
    effects: {
      *query({ payload:{page} }, { call, put }) {  // eslint-disable-line
        const data =yield call(roleService.queryRoleList,page,10);
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
      *selectRoleById({payload:{id}},{call,put}){
        const { data } = yield call(roleService.selectById,{id});
        yield put({ 
          type: 'save',
          payload:{
            list:data.list,
            total:data.total,
          }
        });
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  