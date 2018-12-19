import React from "react";
import "./login.css";
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
  
  const FormItem = Form.Item;
  
  const  LoginForm = (props) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      props.form.validateFields((err, values) => {        
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    const { getFieldDecorator } = props.form;
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem className="">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
  
const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;