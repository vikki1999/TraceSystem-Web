import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from '../index.less';
//dva
import {connect} from 'dva';

// antd
import { Layout, Menu, Icon,Spin } from 'antd';
const { Sider } = Layout;
const { SubMenu, Item } = Menu;


// const menuKey = menu.map(item => item.key);

class Siders extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        // 初始化置空可以在遍历不到的时候应用默认值
        this.state = {
            collapsed:false,
            openKeys: [''],
            selectedKeys: [''],
            rootSubmenuKeys: [],
            itemName: '',
            isLoading:true,
        };
    }

    componentDidMount(){
        console.log(this.props);
        if(this.props.menuList!==undefined){
            this.setState({
                isLoading:false,
            })
        }
    }

    OpenChange = openKeys => {
        console.log(this.props);
        this.setState({
            rootSubmenuKeys:this.props.menuList.map(item => item.key),
        })
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
            });
        }
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        console.log(this.props);
        const {collapsed, openKeys, selectedKeys,isLoading } = this.state;
        const isValidArr = value => value && Array.isArray(value);
        const isValidArrChild = value => value && value.children && Array.isArray(value.children) && value.children.length > 0;
        const getMenus = (Arr) => {
            if (isValidArr(Arr)) {
            return Arr.map(ArrItem => {
                if (isValidArrChild(ArrItem)) {
                return (
                    <SubMenu
                    key={ArrItem.key}
                    title={
                        <div>
                        {ArrItem.icon ? <Icon type={ArrItem.icon} theme="outlined" /> : null}
                        <span>{ArrItem.name}</span>
                        </div>
                    }
                    >
                    {getMenus(ArrItem.children)}
                    </SubMenu>
                );
                }
                return (
                <Item key={ArrItem.key}  
                    onClick={() => {
                    // 设置高亮的item
                    this.state.selectedKeys=[ArrItem.key];
                    // 设置文档标题
                    document.title = ArrItem.name;
                }}>
                    {(ArrItem.power == this.props.power || this.props.power =='0')? 
                        <Link to={ArrItem.path}> 
                            {ArrItem.icon ? <Icon type={ArrItem.icon} theme="outlined" /> : null}
                            <span>{ArrItem.name}</span>
                        </Link>
                        : <Link to="/nopower">
                        {ArrItem.icon ? <Icon type={ArrItem.icon} theme="outlined" /> : null}
                            <span>{ArrItem.name}</span>
                        </Link>
                    }
                </Item>
                );
            });
            }
        }
        if(isLoading ){
            return (<Spin />); 
        }else{
            return(
                <Sider
                    collapsible
                    breakpoint="lg"
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                    theme={'light'}>
                    <div className={style.SiderHeader}>
                        <img src="../../../../public/logo.png" style={{ width: 30, height: 30, }} />
                        {collapsed ? '' : <span style={{ 'marginLeft': 10, 'fontSize': 16, }}>品牌溯源平台</span>}
                    </div>
                    <Menu
                        subMenuOpenDelay={0.3}
                        theme="light"
                        openKeys={openKeys}
                        selectedKeys={selectedKeys}
                        mode="inline"
                        onOpenChange={this.OpenChange}>
                        {getMenus(this.props.menuList)}
                    </Menu>
                </Sider>
            )
        }
       
    }
}


export default Siders;