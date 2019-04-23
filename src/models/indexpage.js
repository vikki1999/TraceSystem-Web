import * as traceService from '../services/indexpage'
export default {

    namespace: 'indexpage',
  
    state: {
      list:[],
      total:0,
      page:0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
      },
    },
  
    effects: {
      *trace({ payload:{traceid} }, { call, put }) {  // eslint-disable-line
        const data =yield call(traceService.trace,traceid);
        console.log(data.data);
        yield put({ 
          type: 'save',
          payload:{
            list:data.data.list,
            total:data.data.total,
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
  