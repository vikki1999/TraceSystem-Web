import React from 'react';
import { connect } from 'dva';
import { Layout,Form,Icon,Input,Button } from 'antd';
import { Link } from 'dva/router';

const {
  Header, Footer, Sider, Content,
} = Layout;



function Error() {

  return (
    <div style={{ minHeight: '100vh' }}>
      <Layout className="layout">
        <Header style={{backgroundColor:'white',}}>
          <div style={{float:'left'}}>
            <img src="../public/logo.png" style={{width:30,height:30,}}/>
            <span style={{'margin-left':10,'fontSize':16,}}>品牌溯源平台</span>
          </div>
          {/* <a style={{float:'right',}} href="localhost:8000/login">登录</a> */}
          <Link to='/login' style={{float:'right',}}>登录</Link>
        </Header>
        <Content style={{height:400,padding:20,'margin-left':400,'margin-top':100}}>
         o~o发生错误了
        </Content>
        <Footer style={{'text-align':'center',}}>
          Ant Design Admin © 2019 TraceSystem
        </Footer>
      </Layout>
    </div>
  );
}

Error.propTypes = {
};

export default connect()(Error);
