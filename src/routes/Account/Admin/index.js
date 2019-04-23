import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'
import UserModal from './AdminModal'
import styles from './index.less'

class Admin extends Component {
    
    editHandler = ({ adminid, values }) => {
        this.props.dispatch({
            type: 'admin/update',
            payload: { adminid,values }
        })
    }
    deleteHandler = ({ id }) => {
        console.log(id)
        this.props.dispatch({
            type: 'admin/delete',
            payload: { id }
        })
    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'admin/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'admin/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'username',
                title: '管理员名字',
                dataIndex: 'username',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'email',
                title: '邮箱',
                dataIndex: 'email'
            },
            {
                key:'local',
                title: '地区',
                dataIndex: 'local'
            },
            {
                key:'mobilephone',
                title: '联系电话',
                dataIndex: 'mobilephone'
            },{
                key:'gender',
                title: '性别',
                dataIndex: 'gender'
            },
            {
                key:'ethaccount',
                title: '区块链账号',
                dataIndex: 'ethaccount'
            },
            {
                key:'ethpwd',
                title: '区块链密码',
                dataIndex: 'ethpwd'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        <UserModal record={record} onOk={this.editHandler}>
                            <a>Edit</a>
                        </UserModal>
                        <Popconfirm
                            title="Confirm to delete?"
                            onConfirm={this.deleteHandler.bind(null, {
                                id: record.userid
                            })}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    </span>
            }
        ]
        return (
            <div className={styles.normal}>
                <div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.userid}
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
    const { list, total,page } = state.admin
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Admin);