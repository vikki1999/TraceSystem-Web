import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

class UserModal extends Component {
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
        const { onOk, record: { userid } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk({ userid, values })
                this.hideModalHandler()
            }
        })
    }

    render() {
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        const { username, email, local, gender,mobilephone,loginpwd,rolename } = this.props.record
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                    <Modal
                        title="用户管理"
                        visible={this.state.visible}
                        onOk={this.okHandler}
                        onCancel={this.hideModalHandler}
                    >
                        <Form layout="horizontal" onSubmit={this.okHandler}>
                            <FormItem {...formItemLayout} label="账号名">
                                {getFieldDecorator('username', {
                                    initialValue: username,
                                    rules: [
                                        { required: true, message: '账号名不能为空' }
                                    ]
                                })(<Input placeholder="请输入账号名" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="邮箱">
                                {getFieldDecorator('email', {
                                    initialValue: email,
                                    rules: [
                                        { required: true, message: '邮箱不能为空' }
                                    ]
                                })(<Input placeholder="请输入邮箱" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="地址">
                                {getFieldDecorator('local', {
                                    initialValue: local,
                                    rules: [
                                        { required: true, message: '地址不能为空' }
                                    ]
                                })(<Input placeholder="请输入地址" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="性别">
                                {getFieldDecorator('gender', {
                                    initialValue: gender,
                                    rules: [
                                        { required: true, message: '性别不能为空' }
                                    ]
                                })(<Input placeholder="请输入性别" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="手机号码">
                                {getFieldDecorator('mobilephone', {
                                    initialValue: mobilephone,
                                    rules: [
                                        { required: true, message: '手机号码不能为空' }
                                    ]
                                })(<Input placeholder="请输入手机号码" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="密码">
                                {getFieldDecorator('loginpwd', {
                                    initialValue: loginpwd,
                                    rules: [
                                        { required: true, message: '密码不能为空' }
                                    ]
                                })(<Input placeholder="请输入密码" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="角色">
                                {getFieldDecorator('rolename', {
                                    initialValue: rolename,
                                    rules: [
                                        { required: true, message: '角色不能为空' }
                                    ]
                                })(<Input placeholder="请输入角色" />)}
                            </FormItem>
                        </Form>
                    </Modal>
                </span>
            </span>
        )
    }
}

export default Form.create()(UserModal)