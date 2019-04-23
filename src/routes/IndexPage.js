import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Layout,Form,Icon,Input,Button,Pagination,Table,Collapse,Timeline ,message,Steps  } from 'antd';
import { Link } from 'dva/router';
import styles from './IndexPage.css'

const {
  Header, Footer, Sider, Content,
} = Layout;
const Panel = Collapse.Panel;
const Step = Steps.Step;
const content ={
  marginTop:10,
  borderRadius: 6,
  backgroundColor: '#fafafa',
}

const action ={
  marginTop: 24,
}
class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      contentinfo:[],
      step:'',
      title:[],
      content:[]
    };
  }
 inpValu='';

next() {
  const current = this.state.current + 1;
  this.setState({ current:current });
}

prev() {
  const current = this.state.current - 1;
  this.setState({ current:current });
}   


handelChange(e){
  this.inpValu=e.target.value;
   
}


setTrace = (Arr) => {
  const isValidArr = value => value && Array.isArray(value);
  if (isValidArr(Arr)) {
      //生成title内容
      var j=0;
      var title=[];
      var contents=[];
      title[0]=Arr[0].companyname;
      for(var i=0;i<Arr.length;i++){
        if(title[j]!==Arr[i].companyname){
          title.push(Arr[i].companyname);
          j++;
        }
      }
      this.setState({title:title}) 
      //生成content内容
      for(var i=0;i<title.length;i++){
        var co = [];
        var name="";
        for(var y=0;y<Arr.length;y++){
          if(title[i]==Arr[y].companyname){
            co.push(Arr[y].time+" 用"+Arr[y].technologyname+"对"+Arr[y].rawname+"进行"+Arr[y].productmakename);
            name=Arr[y].productname;
          }
        }
        co.push("最终产出"+name);
        contents.push(co);
      }
      this.setState({content:contents})
  }
}

getContent = () => {
  if(this.state.content.length>0){
    return(
    this.state.content.map(item=>{
      return(item.map((i,index)=><Timeline.Item key={index}>{i}</Timeline.Item>)
    )})
    );
  }
}

getTitle = () => {
  if(this.state.title.length>0){
    return(
      this.state.title.map(item=><Step key={item} title={item} />)
    );
  }
}

handleQuery = ()=> {
    // console.log(this.inpValu);
    const inpValu = this.inpValu;
    this.props.dispatch({
      type:'indexpage/trace',
      payload:{traceid:inpValu},
    })
    let timer = setInterval(function(){
      let list = this.props.list;
       // 判断list
       if( list.length > 0 ){
        window.clearInterval(timer);
        // this.setState({ str:this.getTrace(this.props.list) });
        this.setTrace(this.props.list);
        this.setState({ step:this.getTitle(),contentinfo:this.getContent() });
          // ReactDOM.render(tr, document.getElementById('trace'));
       }
   // 在定时器中绑定this，确保每次this指向一样
   }.bind(this),300);
    
}
render(){
  
  return (
    <div style={{ minHeight: '100vh' }}>
      <Layout className="layout">
        <Header style={{backgroundColor:'white',}}>
          <div style={{float:'left'}}>
            <img src="../logo.png" style={{width:30,height:30,}}/>
            <span style={{'marginLeft':10,'fontSize':16,}}>品牌溯源平台</span>
          </div>
          <Link to='/login' style={{float:'right',}}>登录</Link>
        </Header>
        <Content style={{minHeight:500, padding:20,'margin':'0 50px '}}>
          <Input id='traceid' onChange={this.handelChange.bind(this)} style={{width:500,}} placeholder="请输入溯源码"/>
          <Button onClick={this.handleQuery}>溯源查询</Button>
          
          <div id="trace" style={{marginTop: 16,}}>
            <div style={{backgroundColor: '#fafafa',borderRadius: 6,}}>
              <Steps style={{padding:16}} progressDot current={this.state.current}>
                {this.state.step}
              </Steps>
              </div>
              <div style={content}>
                <Timeline style={{paddingTop:20,marginLeft:50}}>
                {this.state.contentinfo[this.state.current]}
                </Timeline>
              </div>
              <div style={action}>
                {
                  this.state.current < this.state.title.length - 1
                  && <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                  this.state.current > 0
                  && (
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                  )
                }
              </div>
           
          </div>
        </Content>
        <Footer style={{'textAlign':'center',}}>
          Ant Design Admin © 2019 TraceSystem
        </Footer>
      </Layout>
    </div>
  );
}
}
IndexPage.propTypes = {
};
function mapStateToProps(state) {
  // 得到model中的state)
  const { list, total,page } = state.indexpage
  // console.log(state);
  return {
    list,
    total: parseInt(total, 10),
    page:parseInt(page,10)
  }
}
export default connect(mapStateToProps)(IndexPage);
