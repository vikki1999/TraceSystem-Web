import React , { Component } from 'react'
import {Row,Col,Card,Skeleton,Avatar,Icon,List,Button} from 'antd'
import { Link } from 'react-router-dom';
import styles from './index.less'
// dva
import { connect } from 'dva'

const { Meta } = Card
class Idea extends Component {
    

    render(){
        const { list: dataSource, total, page:current } = this.props;
        return(
            <div style={{ padding:16 }}>
                
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={['', ...dataSource]}
                    renderItem={item => (
                        item ? (
                    <List.Item>
                        <Card
                        actions={[<Link to={{pathname:"/process-productmake",productmakeid:item.productmakeid,productname:item.productname}} ><Icon type="setting" /></Link>]}
                        > 
                            <Meta
                            avatar={<Avatar icon="schedule" style={{ backgroundColor: '#87d068' }}></Avatar>}
                            title={item.productmakeid}
                            description={<div><p>产品：{item.productname}</p><p>设计日期：{item.designdate}</p></div>}
                            />
                        </Card>
                    </List.Item>):(
                        <List.Item>
                            <Button type="dashed" className={styles.newButton}>
                            <Icon type="plus" /> 新增产品
                            </Button>
                        </List.Item>
                    )
                    )}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    // 得到model中的state)
    const { list, total,page } = state.idea
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Idea);