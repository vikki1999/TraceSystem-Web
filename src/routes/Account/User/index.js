import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'
import UserModal from './UserModal'
import styles from './index.less'


class User extends Component {
    createHandler = ({ values }) => {
        this.props.dispatch({
            type: 'user/create',
            payload:{ values}
        })
    }
    editHandler = ({ userid, values }) => {
        this.props.dispatch({
            type: 'user/update',
            payload: { userid,values }
        })
    }
    deleteHandler = ({ id }) => {
        console.log(id)
        this.props.dispatch({
            type: 'user/delete',
            payload: { id }
        })
    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'user/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'user/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'username',
                title: '账号名',
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
                title: '地址',
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
                key:'loginpwd',
                title: '密码',
                dataIndex: 'loginpwd'
            },
            {
                key:'rolename',
                title: '角色',
                dataIndex: 'rolename'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        <UserModal record={record} onOk={this.editHandler}>
                            <a>编辑</a>
                        </UserModal>
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
                        <UserModal record={{}} onOk={this.createHandler}>
                            <Button type="primary">添加用户</Button>
                        </UserModal>
                    </div>
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
    const { list, total,page } = state.user
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(User);