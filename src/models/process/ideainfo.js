import * as ideaService from '../../services/process/idea'
export default {

    namespace: 'ideainfo',
  
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
      *query({ payload:{page,productmakeid} }, { call, put }) {  // eslint-disable-line
        const data =yield call(ideaService.queryOneProductMake,page,10,productmakeid);
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
  