import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'
import BrandModal from './BrandModal'
import styles from './index.less'


class Brand extends Component {
    createHandler = ({ values }) => {
        this.props.dispatch({
            type: 'brand/create',
            payload:{ values}
        })
    }
    editHandler = ({ brandid, values }) => {
        this.props.dispatch({
            type: 'brand/update',
            payload: { brandid,values }
        })
    }
    deleteHandler = ({ id }) => {
        console.log(id)
        this.props.dispatch({
            type: 'brand/delete',
            payload: { id }
        })
    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'brand/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'brand/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'brandid',
                title: '品牌编码',
                dataIndex: 'brandid',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'brandname',
                title: '品牌名称',
                dataIndex: 'brandname'
            },
            {
                key:'history',
                title: '历史故事',
                dataIndex: 'history'
            },
            {
                key:'category',
                title: '品牌类别',
                dataIndex: 'category'
            },{
                key:'createtime',
                title: '创建时间',
                dataIndex: 'createtime'
            },
            {
                key:'companyname',
                title: '所属公司',
                dataIndex: 'companyname'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        <BrandModal record={record} onOk={this.editHandler}>
                            <a>编辑</a>
                        </BrandModal>
                        <Popconfirm
                            title="Confirm to delete?"
                            onConfirm={this.deleteHandler.bind(null, {
                                id: record.userid
                            })}
                        >
                            <a>删除</a>
                        </Popconfirm>
                    </span>
            }
        ]
        return (
            <div className={styles.normal}>
                <div>
                    <div className={styles.create}>
                        <BrandModal record={{}} onOk={this.createHandler}>
                            <Button type="primary">添加品牌信息</Button>
                        </BrandModal>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.brandid}
                        pagination={false}
                    />
                    <Pagination
                        className="ant-table-pagination"
                        total={total}
                        current={current}
                        pageSize={10}
                        onChange={this.pageChangeHandler}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // 得到model中的state)
    const { list, total,page } = state.brand
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Brand);