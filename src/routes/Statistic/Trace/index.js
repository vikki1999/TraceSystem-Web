import React , { Component } from 'react'
import BMap from 'BMap'
import BMapLib from 'BMapLib'
import styles from './index.less'
// dva
import { connect } from 'dva'
import {Table,Pagination,Row,Divider} from 'antd'
const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
  };
class Trace extends Component {
    constructor( props ){
        super(props);
        this.state = {};
    }
    getMap = (locals) => {
        var map = new BMap.Map("container");
        map.centerAndZoom(new BMap.Point(118.454, 32.955), 6);
        map.enableScrollWheelZoom();
        var pp={};
        var pps=[];
        // alert(locals)
        for(var i=0;i<locals.length;i++){
            
            map.addOverlay(createMaker(locals[i]));
        }
        function createMaker(node) {
            // alert("yes")
            var position = new BMap.Point(node.longitude,node.latitude);
            pp[node.supplierid]=position;
            var marker =new BMap.Marker(position); // 创建标注点
            var info =node.suppliername; // 创建信息窗口对象，引号里可以书写任意的html语句。
            marker.addEventListener("mouseover", function(){
                this.openInfoWindow(new BMap.InfoWindow("<span >"+info+"</span>",{width: 100,height: 15,}));
            });
            marker.addEventListener("mouseout", function(){
                this.closeInfoWindow(new BMap.InfoWindow("<span >"+info+"</span>"));
            });
            return marker;
        };
        for(var i=0;i<locals.length;i++){
            var curve = new BMapLib.CurveLine([pp[locals[i].supplierid],pp[locals[i].companyid]], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
            map.addOverlay(curve); //添加到地图中

        }
        

    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'trace/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'trace/query', payload: { page: 1 } })
        }
        let timer = setInterval(function(){
           let locallist = this.props.locallist;
            // 判断locallist
            if( locallist.length > 0 ){
                this.getMap(locallist)
                window.clearInterval(timer);
            }
        // 在定时器中绑定this，确保每次this指向一样
        }.bind(this),300);
    }
    
    render(){
        console.log(this.props)
        const { list: dataSource, total, page:current,locallist } = this.props;
        const columns = [
            {
                key:'supplierid',
                title: '供应商编码',
                dataIndex: 'supplierid',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'suppliername',
                title: '供应商名字',
                dataIndex: 'suppliername'
            },
            {
                key:'suppliercategory',
                title: '供应商类型',
                dataIndex: 'suppliercategory'
            },
            {
                key:'address',
                title: '地址',
                dataIndex: 'address'
            },
        ]
        console.log(locallist.length);
        return(
            <div style={{padding:17 ,}}>
               
                <div>
                    <p style={pStyle}>溯源节点分布</p>
                    <Divider />
                    <Row>
                        <div className={styles.container} id="container"></div>
                    </Row>
                </div>
                <Divider style={{ marginBottom: 32 }} />
                <div>
                <p style={pStyle}>我的供应商</p>
                <Divider />
                <Row>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.supplierid}
                        pagination={false}
                        bordered
                    />
                    <Pagination
                        className="ant-table-pagination"
                        total={total}
                        current={current}
                        pageSize={10}
                        onChange={this.pageChangeHandler}
                    />
                </Row>    
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    // 得到model中的state)
    const { list, total,page,locallist } = state.trace
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10),
        locallist
    }
}


export default connect(mapStateToProps)(Trace);