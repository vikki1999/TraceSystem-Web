import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

class BrandModal extends Component {
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
        const { onOk, record: { brandid } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk({ brandid, values })
                this.hideModalHandler()
            }
        })
    }

    render() {
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        const { brandid, brandname, history, category,createtime,companyname } = this.props.record
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                    <Modal
                        title="品牌管理"
                        visible={this.state.visible}
                        onOk={this.okHandler}
                        onCancel={this.hideModalHandler}
                    >
                        <Form layout="horizontal" onSubmit={this.okHandler}>
                            <FormItem {...formItemLayout} label="品牌编码">
                                {getFieldDecorator('branid', {
                                    initialValue: brandid,
                                    rules: [
                                        { required: true, message: '品牌编码不能为空' }
                                    ]
                                })(<Input placeholder="input branid text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="品牌名称">
                                {getFieldDecorator('brandname', {
                                    initialValue: brandname,
                                    rules: [
                                        { required: true, message: '品牌名称不能为空' }
                                    ]
                                })(<Input placeholder="input brandname text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="历史故事">
                                {getFieldDecorator('history', {
                                    initialValue: history,
                                    rules: [
                                        { required: true, message: '历史故事不能为空' }
                                    ]
                                })(<Input placeholder="input history text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="品牌类别">
                                {getFieldDecorator('category', {
                                    initialValue: category,
                                    rules: [
                                        { required: true, message: '品牌类别不能为空' }
                                    ]
                                })(<Input placeholder="input category text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="创建时间">
                                {getFieldDecorator('createtime', {
                                    initialValue: createtime,
                                    rules: [
                                        { required: true, message: '创建时间不能为空' }
                                    ]
                                })(<Input placeholder="input createtime text" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="所属公司">
                                {getFieldDecorator('companyname', {
                                    initialValue: companyname,
                                    rules: [
                                        { required: true, message: '所属公司不能为空' }
                                    ]
                                })(<Input placeholder="input companyname text" />)}
                            </FormItem>
                        </Form>
                    </Modal>
                </span>
            </span>
        )
    }
}

export default Form.create()(BrandModal)