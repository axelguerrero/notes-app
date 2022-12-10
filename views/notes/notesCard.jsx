import React from 'react';
import { Card } from 'antd';

const NotesCard = (data) => (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Card title"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
      </Card>
    </div>
  );

module.exports = NotesCard