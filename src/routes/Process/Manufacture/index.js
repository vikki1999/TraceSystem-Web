import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar, Divider, Card, Row, Col, Steps,Popover,List } from 'antd'
import { Link } from 'react-router-dom';
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
  
class Manufacture extends Component {
    constructor( props ){
        super(props);
        this.state = {};
    }

    render(){
        const paginationProps ={
            pageSize: 5
          }
        
          const data = ["YLXX120036FKY-1工艺流程，生产棉锦弹衬衫"]
        return(
          <div>
            <List
              size="large"
              header={<div>生产流程列表</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item><Link to="/manufactureinfo">{item}</Link></List.Item>)}
            />
          </div>
        );
    }
}



export default Manufacture;