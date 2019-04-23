import * as ideaService from '../../services/process/idea'
export default {

    namespace: 'idea',
  
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
        const data =yield call(ideaService.queryProductMakeList,page,10);
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
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  