import React, { useState } from 'react';
import Def from './default';
import { PlusOutlined } from '@ant-design/icons';
import { 
  Form,
  Input, 
  Button, 
} from 'antd';
import { color } from '@mui/system';


const { TextArea } = Input;

function Contact(data) {
  return(
    <Def>
      <main>
        <body>
          <h1>Contact us</h1>
          <div className="contactForm">
          <Form 
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            layout="horizontal"
          >
            <Form.Item 
              label={<label style={{ color: "white" }}>Name</label>}
              name="name"
              rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label={<label style={{ color: "white" }}>Email</label>}
              name="email"
              rules={[
            {
              required: true,
              message: "Please input your email!"
            }
          ]}
              >
              <Input />
            </Form.Item>
            <Form.Item 
            label={<label style={{ color: "white" }}>Issue</label>}
            name="issue"
             rules={[
           {
             required: true,
             message: "Please input your issue!"
           }
         ]}
             >
              <Input />
            </Form.Item>
            <Form.Item 
              label={<label style={{ color: "white" }}>Description</label>}
              name="description"
              >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
            align="center"
            >
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
              </div>
            </body>
          </main>
        </Def>
      )
    }
 

export default Contact;