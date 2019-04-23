import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

class AdminModal extends Component {
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
        const { onOk, record: { adminid } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk({ adminid, values })
                this.hideModalHandler()
            }
        })
    }

    render() {
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        const { username,email, gender,mobilephone,local,ethaccount,ethpwd } = this.props.record
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                    <Modal
                        title="管理员信息"
                        visible={this.state.visible}
                        onOk={this.okHandler}
                        onCancel={this.hideModalHandler}
                    >
                        <Form layout="horizontal" onSubmit={this.okHandler}>
                            <FormItem {...formItemLayout} label="管理员名字">
                                {getFieldDecorator('username', {
                                    initialValue: username,
                                    rules: [
                                        { required: true, message: '管理员名字不能为空' }
                                    ]
                                })(<Input placeholder="请输入管理员名字" disabled={true} />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="邮箱">
                                {getFieldDecorator('email', {
                                    initialValue: email,
                                    rules: [
                                        { required: true, message: '邮箱不能为空' }
                                    ]
                                })(<Input placeholder="请输入邮箱" disabled={true}/>)}
                            </FormItem>
                           
                            <FormItem {...formItemLayout} label="性别">
                                {getFieldDecorator('gender', {
                                    initialValue: gender,
                                    rules: [
                                        { required: true, message: '性别不能为空' }
                                    ]
                                })(<Input placeholder="请输入性别" disabled={true}/>)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="手机号码">
                                {getFieldDecorator('mobilephone', {
                                    initialValue: mobilephone,
                                    rules: [
                                        { required: true, message: '手机号码不能为空' }
                                    ]
                                })(<Input placeholder="请输入手机号码" disabled={true}/>)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="地区">
                                {getFieldDecorator('local', {
                                    initialValue: local,
                                    rules: [
                                        { required: true, message: '地区不能为空' }
                                    ]
                                })(<Input placeholder="请输入地区" disabled={true}/>)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="区块链账号">
                                {getFieldDecorator('ethaccount', {
                                    initialValue: ethaccount,
                                    rules: [
                                        { required: true, message: '区块链账号不能为空' }
                                    ]
                                })(<Input placeholder="请输入区块链账号" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="区块链密码">
                                {getFieldDecorator('ethpwd', {
                                    initialValue: ethpwd,
                                    rules: [
                                        { required: true, message: '区块链密码不能为空' }
                                    ]
                                })(<Input placeholder="请输入区块链密码" />)}
                            </FormItem>
                        </Form>
                    </Modal>
                </span>
            </span>
        )
    }
}

export default Form.create()(AdminModal)