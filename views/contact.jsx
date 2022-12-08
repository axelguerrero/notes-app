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
      <main>
        <body>
          <h1 className='logo'>Contact us</h1>
          <Form
            labelCol={{
            span: 4,
          }}
          wrapperCol={{
           span: 10,
         }}
          layout="horizontal"
        >
          <Form.Item 
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item 
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item 
            label="Issue"
            name="Issue"
            rules={[
              {
                required: true,
                message: 'Please select your issue!',
              },
            ]}>
            <Select placeholder="Please select one">
              <Select.Option value="My Notes aren't Appearing">My Notes aren't Appearing</Select.Option>
              <Select.Option value="The website is glitchy">The website is glitchy</Select.Option>
              <Select.Option value="I can't make a new set of notes">I can't make a new set of notes</Select.Option>
              <Select.Option value="I cant invite people to my notes">I cant invite people to my notes</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button>Submit</Button>
              </Form.Item>
            </Form>
          </body>
        </main>
      </Def>
    )
  }
 

export default Contact;