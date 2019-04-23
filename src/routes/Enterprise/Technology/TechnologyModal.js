import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

class TechnologyModal extends Component {
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
        const { onOk, record: { technologyid } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk({ technologyid, values })
                this.hideModalHandler()
            }
        })
    }

    render() {
        const { children } = this.props
        const { getFieldDecorator } = this.props.form
        const { technologyid,technologyname,note,patentid,patentcategory } = this.props.record
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        return (
            <span>
                <span onClick={this.showModalHandler}>
                    {children}
                    <Modal
                        title="工艺管理"
                        visible={this.state.visible}
                        onOk={this.okHandler}
                        onCancel={this.hideModalHandler}
                    >
                        <Form layout="horizontal" onSubmit={this.okHandler}>
                            <FormItem {...formItemLayout} label="工艺名称">
                                {getFieldDecorator('technologyname', {
                                    initialValue: technologyname,
                                    rules: [
                                        { required: true, message: '工艺名称不能为空' }
                                    ]
                                })(<Input placeholder="输入工艺名称" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="备注">
                                {getFieldDecorator('note', {
                                    initialValue: note,
                                    rules: [
                                        { required: true, message: '备注不能为空' }
                                    ]
                                })(<Input placeholder="输入备注" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="专利编码">
                                {getFieldDecorator('patentid', {
                                    initialValue: patentid,
                                    rules: [
                                        { required: true, message: '专利编码不能为空' }
                                    ]
                                })(<Input placeholder="请输入专利编码" />)}
                            </FormItem>
                            <FormItem {...formItemLayout} label="专利类型">
                                {getFieldDecorator('patentcategory', {
                                    initialValue: patentcategory,
                                    rules: [
                                        { required: true, message: '专利类型不能为空' }
                                    ]
                                })(<Input placeholder="专利类型" />)}
                            </FormItem>
                        </Form>
                    </Modal>
                </span>
            </span>
        )
    }
}

export default Form.create()(TechnologyModal)