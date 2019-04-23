import * as appService from '../services/app'
import {isLogin,setLoginOut,userId,userName,companyId,power,moudelId,roleName} from '../utils';
import Cookie from '../utils/cookie'

import {routerRedux} from 'dva/router'

export default {

    namespace: 'app',
  
    state: {
      menuList:[],
      username:userName,
      userid:userId,
      companyid:companyId,
      power:power,
      rolename:roleName,
      setLoginOut:setLoginOut
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        dispatch({
          type:'loginIn'
        })
        console.log(roleName)
      },
    },
  
    effects: {
      *queryMenu({ payload:moudelid}, { call, put }) {  // eslint-disable-line
        const data =yield call(appService.queryMenu,moudelid);
        console.log(data.data.list);
        yield put({ 
          type: 'save',
          payload:{
            menuList:data.data.list,
          }
       });
      },
      *loginOut({payload},{put}){
        yield put(routerRedux.push('/login'))
      },
      *loginIn({payload},{put}){
        console.log(moudelId);
        console.log(window.location.pathname);
        if(!isLogin()){
          if(window.location.pathname==="/login" || window.location.pathname==="/indexpage"|| window.location.pathname==="/")return
          alert("请先登陆！");
          yield put({type:'loginOut'})
        }else{
          yield put({type:'queryMenu',payload:moudelId})
        }
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
  