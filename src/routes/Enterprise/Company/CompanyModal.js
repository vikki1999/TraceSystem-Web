import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

class CompanyModal extends Component {
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
        const { onOk, record: { companyid } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk({ companyid, values })
                this.hideModalHandler()
            }
        })
    }

    render() {
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        const { companyid,companyname, abbreviation,certificate,createtime,address } = this.props.record
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                    <Modal
                        title="企业信息管理"
                        visible={this.state.visible}
                        onOk={this.okHandler}
                        onCancel={this.hideModalHandler}
                    >
                        <Form layout="horizontal" onSubmit={this.okHandler}>
                            <FormItem {...formItemLayout} label="企业信用号">
                                {getFieldDecorator('companyid', {
                                    initialValue: companyid,
                                    rules: [
                                        { required: true, message: '企业信用号不能为空' }
                                    ]
                                })(<Input placeholder="input companyid text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="企业名称">
                                {getFieldDecorator('companyname', {
                                    initialValue: companyname,
                                    rules: [
                                        { required: true, message: '企业名称不能为空' }
                                    ]
                                })(<Input placeholder="input companyname text" />)}
                            </FormItem>
                           
                            <FormItem {...formItemLayout} label="企业简称">
                                {getFieldDecorator('abbreviation', {
                                    initialValue: abbreviation,
                                    rules: [
                                        { required: true, message: '企业简称不能为空' }
                                    ]
                                })(<Input placeholder="input Abbreviation text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="工商注册号">
                                {getFieldDecorator('certificate', {
                                    initialValue: certificate,
                                    rules: [
                                        { required: true, message: '工商注册号不能为空' }
                                    ]
                                })(<Input placeholder="input certificate text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="创建时间">
                                {getFieldDecorator('createtime', {
                                    initialValue: createtime,
                                    rules: [
                                        { required: true, message: '创建时间不能为空' }
                                    ]
                                })(<Input placeholder="input createtime text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="企业地址">
                                {getFieldDecorator('address', {
                                    initialValue: address,
                                    rules: [
                                        { required: true, message: '企业地址不能为空' }
                                    ]
                                })(<Input placeholder="input address text" />)}
                            </FormItem>
                        </Form>
                    </Modal>
                </span>
            </span>
        )
    }
}

export default Form.create()(CompanyModal)