import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination, } from 'antd'
import DistributeModal from './DistributeModal'
import styles from './index.less'


class Distribute extends Component {

    createHandler = ({ values }) => {
        this.props.dispatch({
            type: 'distribute/create',
            payload:{ values}
        })
    }
    editHandler = ({  values }) => {
        this.props.dispatch({
            type: 'distribute/update',
            payload: { values }
        })
    }
    deleteHandler = ({ id }) => {
        console.log(id)
        this.props.dispatch({
            type: 'distribute/delete',
            payload: { id }
        })
    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'distribute/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'distribute/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'distributename',
                title: '分销商名字',
                dataIndex: 'distributename',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'distributeid',
                title: '分销商编码',
                dataIndex: 'distributeid'
            },
            {
                key:'address',
                title: '地址',
                dataIndex: 'address'
            },
            {
                key:'createdate',
                title: '建立日期',
                dataIndex: 'createdate'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        <DistributeModal record={record} onOk={this.editHandler}>
                            <a>编辑</a>
                        </DistributeModal>
                        <Popconfirm
                            title="Confirm to delete?"
                            onConfirm={this.deleteHandler.bind(null, {
                                id: record.distributeid
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
                        <DistributeModal record={{}} onOk={this.createHandler}>
                            <Button type="primary">添加分销商</Button>
                        </DistributeModal>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.distributeid}
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
    const { list, total,page } = state.distribute
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Distribute);