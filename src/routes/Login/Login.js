import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import styles from './Login.less'
import routerRedux from 'dva/router'


const FormItem = Form.Item

const Login = ({
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({
        type:'login/submit',
        payload:values,
      })
    })
  }

  return (
    <div className={styles.content}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt={'logo'} src='../public/logo.png' />
          <span>品牌溯源平台</span>
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '用户名为必填项，不能为空!'
                },
              ],
            })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '密码为必填项，不能为空!'
                },
              ],
            })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
          </FormItem>
          <Row>
            <Button type="primary" size="large" onClick={handleOk}>
              登录
            </Button>
          </Row>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
