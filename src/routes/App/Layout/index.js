
import React from 'react'
import { Layout } from 'antd'
import Siders from './Sider'
import Headers from './Header'
import Footers from './Footer'
import Breads from './Bread'
import QueueAnim from 'rc-queue-anim'

const { Content } = Layout;


const Layouts = ({children,location,menuList,username,userid,companyid,power,setLoginOut,rolename,dispatch}) => {
    console.log(rolename);
    const siderProps = {menuList,power};
    const headerProps = {username,userid,companyid,setLoginOut,dispatch,rolename}
    return (
            <Layout style={{ minHeight: '100vh' }}>
                <Siders {...siderProps}/>
                <Layout >
                    <Headers {...headerProps}/>
                    <Breads />
                    <Content style={{ margin: '0 16px',background:'#ffffff',padding:'10 10px' }}>
                    <QueueAnim delay={450} >
                        {children}
                    </QueueAnim>
                    </Content>
                    <Footers />
                </Layout>
            </Layout>
        )
}

Layouts.propTypes = {
    //....
}

export default Layouts