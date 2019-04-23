import React from 'react';
import { Router, Route, Switch ,routerRedux,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/App';
import { Layout } from 'antd';
const { Content } = Layout;
const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {

  const routes = [
    // 
    {
      path:'/login',
      name:'login',
      models: () => [import('./models/login')],
      component: () => import('./routes/Login/Login'),
    },{
      path:'/app',
      name:'app',
      models: () => [import('./models/app')],
      component: () => import('./routes/App'),
    },
    {
      path:'/indexpage',
      name:'indexpage',
      models: () => [import('./models/indexpage')],
      component: () => import('./routes/IndexPage'),
    },{
      path:'/enterprise',
      name:'enterprise',
      layout:true,
      models: () => [import('./models/enterprise')],
      component: () => import('./routes/Enterprise'),
    },{
      path:'/userinfo',
      name:'userinfo',
      layout:true,
      models: () => [import('./models/userinfo')],
      component: () => import('./routes/UserInfo/UserInfo'),
    },{
      path:'/error',
      name:'error',
      layout:true,
      component: () => import('./routes/Error'),
    },{
      path:'/nopower',
      name:'nopower',
      layout:true,
      component: () => import('./routes/NoPower'),
    },{
      path:'/account-admin',
      name:'admin',
      number:1,
      layout:true,
      models: () => [import('./models/account/admin')],
      component: () => import('./routes/Account/Admin'),
    },{
      path:'/account-role',
      name:'role',
      number:2,
      layout:true,
      models: () => [import('./models/account/role')],
      component: () => import('./routes/Account/Role'),
    },{
      path:'/account-user',
      name:'user',
      number:3,
      layout:true,
      models: () => [import('./models/account/user')],
      component: () => import('./routes/Account/User'),
    },{
      path:'/enterprise-company',
      name:'company',
      number:21,
      layout:true,
      models: () => [import('./models/enterprise/company')],
      component: () => import('./routes/Enterprise/Company'),
    },{
      path:'/enterprise-introduce',
      name:'introduce',
      number:4,
      layout:true,
      models: () => [import('./models/enterprise/introduce')],
      component: () => import('./routes/Enterprise/Introduce'),
    },{
      path:'/enterprise-brand',
      name:'brand',
      number:5,
      layout:true,
      models: () => [import('./models/enterprise/brand')],
      component: () => import('./routes/Enterprise/Brand'),
    },{
      path:'/enterprise-designer',
      name:'designer',
      number:6,
      layout:true,
      models: () => [import('./models/enterprise/designer')],
      component: () => import('./routes/Enterprise/Designer'),
    },{
      path:'/enterprise-technology',
      name:'technology',
      number:7,
      layout:true,
      models: () => [import('./models/enterprise/technology')],
      component: () => import('./routes/Enterprise/Technology'),
    },{
      path:'/enterprise-workhouse',
      name:'workhouse',
      number:8,
      layout:true,
      models: () => [import('./models/enterprise/workhouse')],
      component: () => import('./routes/Enterprise/Workhouse'),
    },{
      path:'/enterprise-supplier',
      name:'supplier',
      number:9,
      layout:true,
      models: () => [import('./models/enterprise/supplier')],
      component: () => import('./routes/Enterprise/Supplier'),
    },{
      path:'/enterprise-distribute',
      name:'distribute',
      number:9,
      layout:true,
      models: () => [import('./models/enterprise/distribute')],
      component: () => import('./routes/Enterprise/Distribute'),
    },{
      path:'/process-idea',
      name:'idea',
      number:10,
      layout:true,
      models: () => [import('./models/process/idea')],
      component: () => import('./routes/Process/Idea'),
    },{
      path:'/process-material',
      name:'material',
      number:11,
      layout:true,
      models: () => [import('./models/process/material')],
      component: () => import('./routes/Process/Material'),
    },{
      path:'/process-manufacture',
      name:'manufacture',
      number:12,
      layout:true,
      models: () => [import('./models/process/manufacture')],
      component: () => import('./routes/Process/Manufacture'),
    },{
      path:'/process-quality',
      name:'quality',
      number:13,
      layout:true,
      models: () => [import('./models/process/quality')],
      component: () => import('./routes/Process/Quality'),
    },{
      path:'/product-entering',
      name:'entering',
      number:14,
      layout:true,
      models: () => [import('./models/product/entering')],
      component: () => import('./routes/Product/Entering'),
    },{
      path:'/product-cochain',
      name:'cochain',
      number:15,
      layout:true,
      models: () => [import('./models/product/cochain')],
      component: () => import('./routes/Product/Cochain'),
    },{
      path:'/product-stockin',
      name:'stockin',
      number:16,
      layout:true,
      models: () => [import('./models/product/circulation')],
      component: () => import('./routes/Product/Circulation/Stockin'),
    },{
      path:'/product-transit',
      name:'transit',
      number:17,
      layout:true,
      models: () => [import('./models/product/circulation')],
      component: () => import('./routes/Product/Circulation/Transit'),
    },{
      path:'/product-stockout',
      name:'stockout',
      number:18,
      layout:true,
      models: () => [import('./models/product/circulation')],
      component: () => import('./routes/Product/Circulation/Stockout'),
    },{
      path:'/product-sellout',
      name:'sellout',
      number:19,
      layout:true,
      models: () => [import('./models/product/special')],
      component: () => import('./routes/Product/Special/Sellout'),
    },{
      path:'/product-inventory',
      name:'inventory',
      number:20,
      layout:true,
      models: () => [import('./models/product/special')],
      component: () => import('./routes/Product/Special/Inventory'),
    },{
      path:'/statistic-market',
      name:'market',
      number:21,
      layout:true,
      models: () => [import('./models/statistic/market')],
      component: () => import('./routes/Statistic/Market'),
    },{
      path:'/statistic-trace',
      name:'trace',
      number:22,
      layout:true,
      models: () => [import('./models/statistic/trace')],
      component: () => import('./routes/Statistic/Trace'),
    },{
      path:'/process-productmake',
      name:'productmake',
      number:23,
      layout:true,
      models: () => [import('./models/process/ideainfo')],
      component: () => import('./routes/Process/Idea/IdeaInfo'),
    },{
      path:'/manufactureinfo',
      name:'manufactureinfo',
      number:24,
      layout:true,
      models: () => [import('./models/process/manufacture')],
      component: () => import('./routes/Process/Manufacture/ManufactureInfo'),
    },{
      path:'/excel',
      name:'excel',
      number:25,
      layout:true,
      models: () => [import('./models/excel')],
      component: () => import('./routes/Excel'),
    },{
      path:'/jquery',
      name:'jquery',
      number:26,
      layout:true,
      models: () => [import('./models/testjquery')],
      component: () => import('./routes/Excel/TestJQuery'),
    }
  ];
  

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to={"/indexpage"} />)} />
        {routes.map(({path,name,layout,...dynamics}) => {
          const Component = dynamic({app,...dynamics});
          return(
            <Route
              path = {path}
              key = {name}
              exact
              render={(props)=>{
                if(layout){
                  return(
                    <App>
                      <Component {...props} />
                    </App>    
                  );
                }else{
                  return(<Component {...props} />);
                }
                
              }}
            />
          );
        })}
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;

