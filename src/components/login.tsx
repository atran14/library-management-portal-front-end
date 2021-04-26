import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Input, notification } from 'antd'
import { Form } from 'antd'
import { useContext, useEffect } from 'react'
import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { loggedInUserContext } from '../context/loggedInUserContext'
import { AuthenticationService } from '../shared/services/authenticationService'
import { UserLoginFormModel } from '../shared/types/userLoginFormModel'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export function Login() {
  const [form] = Form.useForm()
  const { setLoggedInUser } = useContext(loggedInUserContext)
  const history = useHistory()

  const onFinish = async (values: UserLoginFormModel) => {
    let authService = new AuthenticationService()
    let loggedInUser = await authService.login(values)

    setLoggedInUser(loggedInUser)
    history.replace('/')
    notification.success({
      message: 'You are logged in!',
      description: `${loggedInUser.id} - ${loggedInUser.firstName} ${loggedInUser.lastName}, Role: ${loggedInUser.role}`,
    })
  }

  return (
    <Form {...layout} form={form} name="login-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
