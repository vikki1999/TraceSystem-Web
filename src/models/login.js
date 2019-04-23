import { routerRedux } from 'dva/router';

import * as loginService from '../services/login';
import {setLoginIn,moudelId,userId,userName,power,companyId,roleName} from '../utils';
export default {
    namespace: 'login',
    state: {
      user:{}
    },
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
        // fetch('http://127.0.0.1:8080/addUser',{method: "POST", values: '{"username":"huanglei","email":"huanglei@163.com","local":"北京市","gender":"M","mobilephone":"19344596945","loginpwd":"huanglei","power":"2"}'})
        // .then(res => res.status>=200 ? res : '')
        // .then(res => res.json())
        // .then(res => console.log(res))
      },
    },
    effects: {
      *submit({ payload:{username,password} }, { put,call }) {
        const user = yield call(loginService.userLogin,username,password);
        if(user.code === 200){
          const data = user.data;
          setLoginIn(data.userid,data.username,data.rolename,data.companyid,data.power,data.moudelid);
          console.log(moudelId+' '+companyId+' '+userId+' '+roleName);
          // yield put(routerRedux.push(data.indexpage));
          window.location.pathname=data.indexpage;
          yield put({type:'app/loginIn'})
          
        }else{
          alert("用户名或密码错误！");
          yield put(routerRedux.push('/login'));
          // window.location.href="127.0.0.1:8000/";
        }
        
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