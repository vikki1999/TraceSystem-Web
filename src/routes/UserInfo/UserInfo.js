import React, { PropTypes,Component } from 'react';
import { connect } from 'dva';
import styles from './UserInfo.less';
import {Select,Input,Form,DatePicker,Button,Spin} from 'antd';
// ...
const Option=Select.Option
@Form.create()
class UserInfo extends Component{

 constructor(props){
   super(props)
 }

  handleSubmit = (e) => {
    e.preventDefault();
    const userid=this.props.user.userid;
    this.props.form.validateFields((err, values) => {
      values.gender==='女'?values.gender='F':values.gender='M'
      if (!err) {
        this.props.dispatch({
          type: 'userinfo/submit',
          payload: { userid,values }
      })
          // window.location.reload();
      }
  })
  }

  

  render(){
    
      const { getFieldDecorator } = this.props.form;
     
      const {username,loginpwd,mobilephone,email,local,gender,createtime,rolename,companyid}=this.props.user;
      const genderv=gender === 'F'? '女':'男'
      const companyname= this.props.companyname
      
      const localOptions = ()=>{
        return this.props.locals.map(ArrItem=>{
          return(<Option key={ArrItem.index} value={ArrItem}>{ArrItem}</Option>)
        })
      }

      return (
        <div  >
        <Form onSubmit={this.handleSubmit} >
          <Form.Item
              label="个人信息"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
              style={{ marginTop: '16px'}}
            >
              
            </Form.Item>
            <Form.Item
              label="用户名"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('username', {
                initialValue:username,
                rules: [ {
                  required: true, message: '请输入用户名',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="密码"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('loginpwd', {
                initialValue:loginpwd,
                rules: [{
                  required: true, message: '请输入密码',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="联系电话"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('mobilephone', {
                initialValue:mobilephone,
                rules: [{
                  required: true, message: '请输入联系电话',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="电子邮箱"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('email', {
                initialValue:email,
                rules: [{
                  required: true, message: '请输入电子邮箱',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="地区"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('local', {
                initialValue: local,
                rules: [{ required: true, message: '请选择地区' }],
              })(
                <Select placeholder="请选择地区">
                  {localOptions()}
                </Select>
              )}
            </Form.Item>
            <Form.Item
              label="性别"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('genderv', {
                initialValue:genderv,
                rules: [
                  { required: true, message: '请选择性别' },
                ],
              })(
                <Select placeholder="请选择性别">
                  <Option value="F">女</Option>
                  <Option value="M">男</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item
              label="角色"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('rolename', {
                initialValue:rolename,
                rules: [{ required: true, message: '请选择角色' }],
              })(
                <Input disabled={true}/>
              )}
            </Form.Item>
            <Form.Item
              label="公司名称"
              labelCol={{span: 4}}
              wrapperCol={{span: 18}}
            >
              {getFieldDecorator('companyname', {
                initialValue:companyname,
                rules: [{ required: true, message: '请选择公司' }],
              })(
                <Input disabled={true}/>
              )}
            </Form.Item>
            <Form.Item
             wrapperCol={{ span: 12, offset: 4 }}
            >
              <Button type="primary" htmlType="submit">修改个人信息</Button>
            </Form.Item>
          </Form>
        </div>
      )
    }

}


  
UserInfo.propTypes = {
  // ...
}
function mapStateToProps(state) {
  // 得到model中的state)
  const { locals,user,companyname} = state.userinfo
  console.log(state);
  return {
      locals,
      user,
      companyname
  }
}

export default connect(mapStateToProps)(UserInfo);