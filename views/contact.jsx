import React, { useState } from 'react';
import Def from './default';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  Button,
  Upload,
} from 'antd';

const { TextArea } = Input;
  
function Contact(data) {
  return(
    <Def>
      <h1 className='logo'>Contact us</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 8,
        }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Issue">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Def>
  )
}
 

export default Contact;