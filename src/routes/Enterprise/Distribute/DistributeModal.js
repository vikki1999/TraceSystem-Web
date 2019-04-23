import React, { Component } from 'react'
import { Modal, Form, Input,DatePicker } from 'antd'
import {companyId} from '../../../utils'

const FormItem = Form.Item

class DistributeModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModalHandler = e => {
        if (e) e.stopPropagation()
        this.setState({
            visible: true
        })
    }

    hideModalHandler = e => {
        if (e) e.stopPropagation()
        this.setState({
            visible: false
        })
    }

    okHandler = e => {
        if (e) e.stopPropagation()
        console.log(this.props);
        const { onOk, record: { distributeid } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk({ values })
                this.hideModalHandler()
            }
        })
    }

    render() {
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        const { distributename, distributeid, address, createdate,companyid } = this.props.record
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                    <Modal
                        title="分销商管理"
                        visible={this.state.visible}
                        onOk={this.okHandler}
                        onCancel={this.hideModalHandler}
                    >
                        <Form layout="horizontal" onSubmit={this.okHandler}>
                            <FormItem {...formItemLayout} label="分销商名字">
                                {getFieldDecorator('distributename', {
                                    initialValue: distributename,
                                    rules: [
                                        { required: true, message: '分销商名字不能为空' }
                                    ]
                                })(<Input placeholder="请输入分销商名字" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="分销商编码">
                                {getFieldDecorator('distributeid', {
                                    initialValue: distributeid,
                                    rules: [
                                        { required: true, message: '分销商编码不能为空' }
                                    ]
                                })(<Input placeholder="请输入分销商编码" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="地址">
                                {getFieldDecorator('address', {
                                    initialValue: address,
                                    rules: [
                                        { required: true, message: '地址不能为空' }
                                    ]
                                })(<Input placeholder="input local text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="建立日期">
                                {getFieldDecorator('createdate', {
                                    initialValue: createdate,
                                    rules: [
                                        { required: true, message: '建立日期不能为空' }
                                    ]
                                })(<DatePicker placeholder="请选择建立日期" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="公司编码">
                                {getFieldDecorator('companyid', {
                                    initialValue: companyId,
                                    rules: [
                                        { required: true, message: '公司编码不能为空' }
                                    ]
                                })(<Input disabled={true} />)}
                            </FormItem>
                            
                        </Form>
                    </Modal>
                </span>
            </span>
        )
    }
}

export default Form.create()(DistributeModal)