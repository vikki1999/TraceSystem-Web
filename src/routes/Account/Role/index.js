import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'
import RoleModal from './RoleModal'
import styles from './index.less'


class Role extends Component {
    
    
    
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'role/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'role/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'roleid',
                title: '角色编码',
                dataIndex: 'roleid',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'rolename',
                title: '角色名',
                dataIndex: 'rolename'
            },
            {
                key:'note',
                title: '角色简介',
                dataIndex: 'note'
            },
            {
                key:'department',
                title: '所属部门',
                dataIndex: 'department'
            },{
                key:'power',
                title: '权限',
                dataIndex: 'power'
            },
            
        ]
        return (
            <div className={styles.normal}>
                <div>
                    
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.roleid}
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
    const { list, total,page } = state.role
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Role);