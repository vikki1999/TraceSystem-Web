import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar, Divider, Card, Row, Col, Steps,Popover } from 'antd'
// import { DropOption } from 'components'
// import { Trans, withI18n } from '@lingui/react'
// import Link from 'umi/link'
// import styles from './List.less'

const { confirm } = Modal
const Step = Steps.Step;

let today=new Date()
const DescriptionItem = ({ title, content }) => (
    <div
      style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
        color: 'rgba(0,0,0,0.65)',
      }}
    >
      <p
        style={{
          marginRight: 8,
          display: 'inline-block',
          color: 'rgba(0,0,0,0.85)',
        }}
      >
        {title}:
      </p>
      {content}
    </div>
  );
  const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
  };
  
class Material extends Component {
    constructor( props ){
        super(props);
        this.state = {};
    }

    render(){
        const paginationProps ={
            pageSize: 5
          }
        const columns = [{
            title: '货物名称',
            dataIndex: 'goodName',
          },{
            title: '包装形式',
            dataIndex: 'packageType',
          },{
            title: '件数',
            dataIndex: 'quantity',
          },{
            title: '体积（立方米）',
            dataIndex: 'cube',
          },{
            title: '件重（千克）',
            dataIndex: 'weight',
          },{
            title: '重量（吨）',
            dataIndex: 'totalWeight',
          },{
            title: '备注',
            dataIndex: 'note',
          }]
      
          const carColumns = [{
              title: '车牌号码',
              dataIndex: 'plateNumber',
              key: 'plateNumber',
              width: 72,
              fixed: 'left',
              // render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
            },{
              title: '车辆类型',
              dataIndex: 'typeName',
              key: 'typeName',
              // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
            },{
              title: '载重',
              dataIndex: 't',
              key: 't',
            },{
              title: '车长',
              dataIndex: 'carLength',
              key: 'carLength',
            },{
              title: '随车联系人',
              dataIndex: 'driverName',
              key: 'driverName',
              // render: text => <span>{text ? 'Male' : 'Female'}</span>,
            },{
              title: '随车电话',
              dataIndex: 'carphone',
              key: 'carphone',
              // render: text => <span>{text ? 'Male' : 'Female'}</span>,
            }]
      
          const driverColumn =[{
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              // render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
            },{
              title: '手机',
              dataIndex: 'phone',
              key: 'phone',
              // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
            },{
              title: '家庭住址',
              dataIndex: 'address',
              key: 'address',
              // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
            },{
              title: '驾驶证号',
              dataIndex: 'dcId',
              key: 'dcId',
              // render: text => <span>{text ? 'Male' : 'Female'}</span>,
            },
          ]
          
          const trackingColumn =[
            {
              title: '状态',
              dataIndex: 'condition',
              key: 'condition',
              width:200
            },{
              title: '操作人',
              dataIndex: 'driverName',
              key: 'driverName',
              width:100
            },{
              title: '操作时间',
              dataIndex: 'time',
              key: 'time',
              width:200
            },{
              title: '说明',
              dataIndex: 't',
              key: 't',
            }
          ]
        return(
            <div>
            <Card
              title={<b>运单号:</b>}
              // extra={<a href="#">More</a>}
              // style={{ width: 300 }}
            >
              <Steps>
                <Step title="完成受理" description="" />
                <Step title="调度中" description="" />
                <Step title="等待运输" description="" />
                <Step title="运输中" description="" />
                <Step title="已完成" description="" />
              </Steps>
              <Divider/>
              <p style={pStyle}>运单信息</p>
              <Row>
                <Col span={8}>
                  <DescriptionItem title="托运人" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="地址" content=''/>
                </Col>
                <Col span={8}>
                  <DescriptionItem title="电话" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="发货人" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="地址" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="电话" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="收货人" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="地址" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="电话" content='' />
                </Col>
              </Row>
              {/* <Row>
                <Col span={8}>
                  <DescriptionItem title="发货人" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="地址" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="电话" content='' />
                </Col>
              </Row> */}
              {/* <Row>
                <Col span={8}>
                  <DescriptionItem title="收货人" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="地址" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="电话" content='' />
                </Col>
              </Row> */}
              <Row>
                <Col span={8}>
                  <DescriptionItem title="约定起运时间" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="约定到达时间" content='' />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <DescriptionItem title="装货地点" content=''/>
                </Col>
                <Col span={8}>
                  <DescriptionItem title="卸货地点" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="计费里程" content='' />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <DescriptionItem title="托运人办理人" content='' />
                </Col>
                <Col span={8}>
                  <DescriptionItem title="承运人办理人" content=''/>
                </Col>
                <Col span={8}>
                  <DescriptionItem title="调度员" content=''  />
                </Col>
              </Row>
              <Divider /> 
              <p style={pStyle}>费用信息</p>
              <Row>
                <Col span={8}>
                  <DescriptionItem title="基础运费" content='' />
                </Col>
                {/* {fee?fee.map(d => <Col span={8}>
                  <DescriptionItem title={d.extraName} content='' />
                </Col>):<Col></Col>} */}
                {/* <Col span={8}>
                  <DescriptionItem title="约定到达时间" content="Coding" />
                </Col> */}
              </Row>
              <Row>
                <Col offset={16} span={8}>
                  <DescriptionItem title="合计" content='' />
                </Col>
              </Row>
              <Divider/>
              <p style={pStyle}>货物信息</p>
              <Row>
                <Table
                  columns={columns}
                //   dataSource={}
                  simple
                //   rowKey={record => record.goodName}
                />
              </Row>
              <Divider />
              <p style={pStyle}>车辆信息</p>
              <Row>
                <Table
                  columns={carColumns}
                //   dataSource={carlist}
                  simple
                  rowKey={record => record.goodName}
                />
              </Row>
              <Divider />
              <p style={pStyle}>司机信息</p>
              <Row>
              <Row>
                <Table
                  columns={driverColumn}
                //   dataSource={}
                  simple
                  rowKey={record => record.goodName}
                />
              </Row>
              </Row>
              <Divider />
              
    
              <p style={pStyle}>状态跟踪</p>
              <Row>
                <Table
                  pagination={paginationProps }
                  columns={trackingColumn}
                  simple
                //   dataSource={condition}
                  // rowKey={record => record.shippingNoteNumber}
                />
              </Row>
              
            </Card>
          </div>
        );
    }
}



export default Material;