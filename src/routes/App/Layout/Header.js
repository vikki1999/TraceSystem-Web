import React , { Component } from 'react'
import style from '../index.less'
import { Layout , Avatar,Dropdown,Menu } from 'antd'
import { Link } from 'react-router-dom';
import routerRedux from 'dva/router'

const { Header } = Layout

class Headers extends Component{
    constructor(props){
        super(props);

    }
    handleLoginOut = () => {
        this.props.setLoginOut();
        window.location.href="/";
    }
   
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/userinfo">个人信息</Link>
                </Menu.Item>
                <Menu.Item>
                    <a href="javascript:void(0);" onClick={this.handleLoginOut}>注销</a>
                </Menu.Item>
            </Menu>
          );
    
        
        return(
            <Header className={style.Header}>
                <Dropdown overlay={menu}>
                    <div className={style.Avatar}>
                        <Avatar style={{ backgroundColor: '#B0E2FF', verticalAlign: 'middle' }} size="large">
                        {this.props.username}
                        </Avatar>
                    </div>
                </Dropdown>
            </Header>
        );
    }
}

export default Headers;