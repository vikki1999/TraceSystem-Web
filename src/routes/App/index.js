import React from 'react'
import Layouts from './Layout'
import { connect } from 'dva'
import { Component } from 'react'
import { ActivityIndicator } from 'antd-mobile';

const TIMER = 800;
let timeoutId = null;
class App extends Component{
    
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            show: false
        }
    }
    componentWillMount() {
        const { loading } = this.props;
        if (loading) {
            timeoutId = setTimeout(() => {
                this.setState({
                    show: true
                });
            }, TIMER);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { loading } = nextProps;
        const { show } = this.state;

        this.setState({
            show: false
        });
        if (loading) {
            timeoutId = setTimeout(() => {
                this.setState({
                    show: true
                });
            }, TIMER);
        }
    }

    componentWillUnmount() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }
    render(){
        const { show } = this.state;
        const { menuList,username,userid,companyid,power,setLoginOut,children,rolename,loading } = this.props;
        const layoutProps = {
            menuList,
            username,
            userid,
            companyid,
            power,
            rolename,
            setLoginOut,
        }
        return (
            <Layouts {...layoutProps}>
               {children}
               <div>
                    <ActivityIndicator toast text="正在加载" animating={show && loading} />
                </div>
            </Layouts>
        )
    }
    
}


App.propTypes = {
    //....
}


function mapStateToProps(state){
    const {menuList,username,userid,companyid,power,setLoginOut,rolename} = state.app;
    
    console.log(rolename);
    return {
        menuList,
        userid,
        username,
        userid,
        companyid,
        power,
        rolename,
        setLoginOut,
        loading: state.loading.global && !state.loading.models.Verify
    }
}
export default connect(mapStateToProps)(App); //通过这种方式来把model层的数据传递到当前组件了
