import React , { Component } from 'react'
// dva
import { connect } from 'dva'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'
import TechnologyModal from './TechnologyModal'
import styles from './index.less'

class Technology extends Component {
    createHandler = ({ values }) => {
        this.props.dispatch({
            type: 'technology/create',
            payload:{ values}
        })
    }
    editHandler = ({ technologyid, values }) => {
        this.props.dispatch({
            type: 'technology/update',
            payload: { technologyid,values }
        })
    }
    deleteHandler = ({ id }) => {
        console.log(id)
        this.props.dispatch({
            type: 'technology/delete',
            payload: { id }
        })
    }
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'technology/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'technology/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'technologyid',
                title: '工艺编码',
                dataIndex: 'technologyid',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'technologyname',
                title: '工艺名称',
                dataIndex: 'technologyname'
            },
            {
                key:'note',
                title: '备注',
                dataIndex: 'note'
            },
            {
                key:'patentid',
                title: '专利编码',
                dataIndex: 'patentid'
            },
            {
                key:'patentcategory',
                title: '专利类型',
                dataIndex: 'patentcategory'
            },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) =>
                    <span className={styles.operation}>
                        <TechnologyModal record={record} onOk={this.editHandler}>
                            <a>Edit</a>
                        </TechnologyModal>
                        <Popconfirm
                            title="Confirm to delete?"
                            onConfirm={this.deleteHandler.bind(null, {
                                id: record.technologyid
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
                        <TechnologyModal record={{}} onOk={this.createHandler}>
                            <Button type="primary">添加工艺</Button>
                        </TechnologyModal>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.technologyid}
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
    const { list, total,page } = state.technology
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Technology);