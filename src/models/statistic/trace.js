import * as traceService from '../../services/statistic/trace'
export default {

    namespace: 'trace',
  
    state: {
      list:[],
      total:0,
      page:0,
      locallist:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        dispatch({
          type:'query',
          payload:{page:1}
        });
        dispatch({
          type:'queryLocal',
        });
      },
    },
  
    effects: {
      *query({ payload:{page} }, { call, put }) {  // eslint-disable-line
        const data =yield call(traceService.querySupplier,page,10);
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
      *queryLocal({ payload }, { call, put }) {  // eslint-disable-line
        const data =yield call(traceService.querySupplierLocal);
        console.log(data.data);
        yield put({ 
          type: 'save',
          payload:{
            locallist:data.data.list
          }
       });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  