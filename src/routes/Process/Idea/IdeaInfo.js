import React , { Component } from 'react'
import {Row,Col,Card,Skeleton,Avatar,Icon,List,Button,Table,Pagination,PageHeader} from 'antd'
import styles from './index.less'
// dva
import { connect } from 'dva'

const { Meta } = Card
class IdeaInfo extends Component {
    

    pageChangeHandler = (page) => {
        const pmakeid = this.props.location.productmakeid;
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'ideainfo/query', payload: { page,pmakeid } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        const pmakeid = this.props.location.productmakeid;
        if (list.length <= 0) {
            dispatch({ type: 'ideainfo/query', payload: { page: 1,productmakeid:pmakeid } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'step',
                title: '步骤',
                dataIndex: 'step',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'productmakename',
                title: '流程名',
                dataIndex: 'productmakename',
            },
            {
                key:'technologyname',
                title: '工艺名',
                dataIndex: 'technologyname'
            },
            {
                key:'rawname',
                title: '原料名',
                dataIndex: 'rawname'
            },
            
        ]
        return (
            <div className={styles.normal}>
                <div>
                    <PageHeader 
                        onBack={() => window.history.back()}
                        title={this.props.location.productmakeid}
                        subTitle={this.props.location.productname}
                    >
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            loading={false}
                            rowKey={record => record.id}
                            pagination={false}
                        />
                        <Pagination
                            className="ant-table-pagination"
                            total={total}
                            current={current}
                            pageSize={10}
                            onChange={this.pageChangeHandler}
                        />
                    </PageHeader>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // 得到model中的state)
    const { list, total,page } = state.ideainfo
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(IdeaInfo);