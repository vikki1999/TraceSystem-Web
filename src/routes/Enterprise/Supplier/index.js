import React , { Component } from 'react'
// dva
import { connect } from 'dva'
import styles from './index.less'
// antd
import { Table, Button, Popconfirm, Pagination } from 'antd'

class Supplier extends Component {
    pageChangeHandler = (page) => {
        console.log(page);
        if(page>0){
            this.props.dispatch({ type: 'supplier/query', payload: { page } })
        }
        
    }
    componentDidMount() {
        const { dispatch, list } = this.props
        if (list.length <= 0) {
            dispatch({ type: 'supplier/query', payload: { page: 1 } })
        }
    }
    render() {
        console.log(this.props);
        const { list: dataSource, total, page:current } = this.props;
        // const { list: dataSource, loading, total } = this.props
        const columns = [
            {
                key:'supplierid',
                title: '供应商编码',
                dataIndex: 'supplierid',
                render: text =>
                    <a href="">
                        {text}
                    </a>
            },
            {
                key:'suppliername',
                title: '供应商名称',
                dataIndex: 'suppliername'
            },
            {
                key:'suppliercategory',
                title: '供应商类别',
                dataIndex: 'suppliercategory'
            },
            {
                key:'address',
                title: '地址',
                dataIndex: 'address'
            },
            
        ]
        return (
            <div className={styles.normal}>
                <div>
                    
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        loading={false}
                        rowKey={record => record.supplierid}
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
    const { list, total,page } = state.supplier
    console.log(state);
    return {
        list,
        total: parseInt(total, 10),
        page:parseInt(page,10)
    }
}

export default connect(mapStateToProps)(Supplier);