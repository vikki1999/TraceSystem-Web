import { Menu, Icon } from 'antd';
import {React,ReactDOM} from 'react';
import style from './index.less';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const EnSider = () => {
 const handleClick = (e) => {
    console.log('click ', e);
  }

 return (
      
      <Menu
                onClick={handleClick}
                className={style.SiderMenu}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
                
                    <Menu.Item key="1">角色管理</Menu.Item>
                    <Menu.Item key="2">账号管理</Menu.Item>
               
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>企业管理</span></span>}>
                    <Menu.Item key="3">企业介绍</Menu.Item>
                    <Menu.Item key="4">品牌介绍</Menu.Item>
                    <Menu.Item key="5">设计师介绍</Menu.Item>
                    <Menu.Item key="6">工艺管理</Menu.Item>
                    <Menu.Item key="7">仓库管理</Menu.Item>
                    <Menu.Item key="8">工厂管理</Menu.Item>
                    <Menu.Item key="9">分销管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>生产过程流通</span></span>}>
                    <Menu.Item key="10">设计师理念</Menu.Item>
                    <Menu.Item key="11">原料流通</Menu.Item>
                    <Menu.Item key="12">生产流通</Menu.Item>
                    <Menu.Item key="13">质检入库</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>商品管理</span></span>}>
                    <Menu.Item key="14">商品录入</Menu.Item>
                    <Menu.Item key="15">商品上链</Menu.Item>
                    <SubMenu key="sub5" title={'商品流通'}>
                        <Menu.Item key="16">商品出库</Menu.Item>
                        <Menu.Item key="17">商品流通</Menu.Item>
                        <Menu.Item key="18">商品入库</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={'特殊处理'}>
                        <Menu.Item key="19">商品售罄处理</Menu.Item>
                        <Menu.Item key="20">商品清仓处理</Menu.Item>
                    </SubMenu>
                    
                </SubMenu>
                <SubMenu key="sub7" title={<span><Icon type="setting" /><span>管理统计</span></span>}>
                    <Menu.Item key="21">销售统计</Menu.Item>
                    <Menu.Item key="22">溯源统计</Menu.Item>
                    
                </SubMenu>
            </Menu>
     
    );
  }


export default EnSider