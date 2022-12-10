import React from 'react'
import Def from '../default'
import { 
  Form,
  Input, 
  Button, 
} from 'antd';



const { TextArea } = Input;

function Edit(data) {
  return (
    <Def>
        <main>
            <h1>Edit Note</h1>
                <Form 
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            layout="horizontal"
            method="POST" 
            action={`/notes/${data.notes.id}?_method=PUT`}
          >
            <Form.Item 
              label={<label style={{ color: "white" }}>Title</label>}
              name="title"
              rules={[
            {
              required: true,
              message: "Please input a name!"
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
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
          </main>
    </Def>
  )
}

module.exports = Edit