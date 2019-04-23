import React, { PropTypes } from 'react';
import { connect } from 'dva';
import {Layout,Menu,Icon,Avatar,Table, Input, Button, Popconfirm, Form,} from 'antd';
import {Link} from 'dva/router'
import EnSider from './EnSider';
import style from './index.less';
import { callbackify } from 'util';

const {Header,Content,Sider,Footer}=Layout;
// ...
const EnterpriseManagement = () => {
//   // create Users propOpts
//   const propOpts = {
//     p1,
//     p2,
//     // ...
//   }
  const state = {
    collapsed: false,
  };

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    state={collapsed:true };
  }

  const handleClick = (e) => {
    console.log('click ', e);
  }
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;

  const columns = [{
    title: '角色',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '账号',
    className: 'column-money',
    dataIndex: 'money',
  }, {
    title: '密码',
    dataIndex: 'address',
  }];

  const data = [{
    key: '1',
    name: '生产经理',
    money: 'zhanghao',
    address: 'zhanghao123',
  }, {
    key: '2',
    name: '财务经理',
    money: 'lifang',
    address: 'lifang123',
  }, {
    key: '3',
    name: '采购经理',
    money: 'wuxiaobo',
    address: 'wuxiaobo123',
  },{
    key: '4',
    name: '仓管经理',
    money: 'jiangxiaobo',
    address: 'jiangxioabo123',
  },{
    key: '5',
    name: '设计总监',
    money: 'linyuyang',
    address: 'linyuyang123',
  },{
    key: '6',
    name: '销售经理',
    money: 'xiaofang',
    address: 'xiaofang123',
  },{
    key: '7',
    name: '财务助理',
    money: 'zhangmaomao',
    address: 'zhangmaomao123',
  },{
    key: '8',
    name: '销售助理',
    money: 'baolili',
    address: 'baolili123',
  },{
    key: '9',
    name: '生产助理',
    money: 'maobuyi',
    address: 'maobuyi123',
  }];

  const handleAdd = () => {
      console.log("add");
  }
  

  return (
   
    
        
          <Content style={{ margin: '0 16px' }}>
            
            <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
                <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                </Button>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    
                />,
            </div>
          </Content>
         
     
   
  )
}
EnterpriseManagement.propTypes = {
  // ...
}
export default EnterpriseManagement