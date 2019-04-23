import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'
import CompanyModal from './CompanyModal'
import styles from './index.less'

class Company extends Component {
    createHandler = ({ values }) => {
        this.props.dispatch({
            type: 'company/create',
            payload:{ values}
        })
    }
    editHandler = ({ companyid, values }) => {
        this.props.dispatch({
            type: 'company/update',
            payload: { companyid,values }
        })
    }
    deleteHandler = ({ id }) => {
        console.log(id)
        this.props.dispatch({
            type: 'company/delete',
            payload: { id }
        })
    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'company/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'company/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'companyid',
                title: '信用号',
                dataIndex: 'companyid',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'companyname',
                title: '企业名称',
                dataIndex: 'companyname'
            },
            {
                key:'abbreviation',
                title: '企业简称',
                dataIndex: 'abbreviation'
            },
            {
                key:'certificate',
                title: '工商注册号',
                dataIndex: 'certificate'
            },{
                key:'address',
                title: '企业地址',
                dataIndex: 'address'
            },
            {
                key:'createtime',
                title: '创建时间',
                dataIndex: 'createtime'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        <CompanyModal record={record} onOk={this.editHandler}>
                            <a>Edit</a>
                        </CompanyModal>
                        <Popconfirm
                            title="Confirm to delete?"
                            onConfirm={this.deleteHandler.bind(null, {
                                id: record.companyid
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
                    <div className={styles.create}>
                        <CompanyModal record={{}} onOk={this.createHandler}>
                            <Button type="primary">添加企业</Button>
                        </CompanyModal>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.companyid}
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
    const { list, total,page } = state.company
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Company);