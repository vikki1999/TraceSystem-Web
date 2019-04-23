import { browserHistory } from 'react-router'
import menu from './menu'
import Cookie from './cookie'

// 连字符转驼峰
String.prototype.hyphenToHump = function () {
  return this.replace(/-(\w)/g, (...args) => {
    return args[1].toUpperCase()
  })
}

// 驼峰转连字符
String.prototype.humpToHyphen = function () {
  return this.replace(/([A-Z])/g, '-$1').toLowerCase()
}

// 日期格式化
Date.prototype.format = function (format) {
  let o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  }
  if (/(y+)/.test(format)) { format = format.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length)) }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1
        ? o[k]
        : (`00${o[k]}`).substr((`${o[k]}`).length))
    }
  }
  return format
}


const isLogin = () => {
  return Cookie.get('user_session') && Cookie.get('user_session') > new Date().getTime()
}

const userName = Cookie.get('username')
const userId = Cookie.get('userid')
const roleName = Cookie.get('rolename')
const companyId = Cookie.get('companyid')
const power = Cookie.get('power')
const moudelId = Cookie.get('moudelid')

const setLoginIn = (userid, username, rolename, companyid,power,moudelid) => {
  const now = new Date()
  now.setDate(now.getDate() + 1)
  Cookie.set('user_session', now.getTime());
  Cookie.set('userid',userid);
  Cookie.set('username',username);
  Cookie.set('rolename',rolename);
  Cookie.set('companyid',companyid);
  Cookie.set('power',power);
  Cookie.set('moudelid',moudelid);
}

const setLoginOut = () => {
  Cookie.remove('user_session')
  Cookie.remove('userid')
  Cookie.remove('username')
  Cookie.remove('rolename')
  Cookie.remove('companyid')
  Cookie.remove('power')
  Cookie.remove('moudelid')
}



export {
    menu,
    isLogin,
    userName,
    userId,
    roleName,
    companyId,
    power,
    moudelId,
    setLoginIn,
    setLoginOut,
  }
  