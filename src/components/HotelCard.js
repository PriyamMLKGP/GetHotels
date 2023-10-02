import { useState, React } from 'react';
import { Card, Button, Tag, Space, Tooltip } from 'antd';
import { HeartOutlined, HeartFilled, HomeOutlined } from '@ant-design/icons';

export default function HotelCard(props) {

  const [liked, setLiked] = useState(false);

  return (
    <div>
         <Card
      style={{ width: "100%", height: "100%" }}
      cover={
        <div style={{ position: 'relative' }}>
          <img alt="example" src={props.hotel.imageURL} style={{ maxWidth: '300px', maxHeight:"200px" }} />
          
          <Tooltip title="For Rent" key="forRent">
            <Tag color="blue" style={{ position: 'absolute', top: 10, left: 10 }}>
              For Rent
            </Tag>
          </Tooltip>
          
          <Tooltip title="Like" key="like">
          {liked ? 
                <HeartFilled style={{ fontSize: 24, position: 'absolute', top: 10, right: 10, color: 'red' }} onClick={() => setLiked(false)} /> 
                : 
                <HeartOutlined style={{ fontSize: 24, position: 'absolute', top: 10, right: 10 }} onClick={() => setLiked(true)} />
          }</Tooltip>
        </div>
      }
    >
      <Tag color="orange">{props.hotel.label?"Popular":null}</Tag>
      <h3>{props.hotel.address}</h3>
      <p>{props.hotel.description}</p>
      
      <Space>
        <span><Tag color="green">{props.hotel.rooms} Room</Tag></span>
        <span><Tag color="green">{props.hotel.beds} Bed</Tag></span>
        <span><Tag color="green">{props.hotel.baths} Bath</Tag></span>
        <span><Tag color="green">{props.hotel.size}</Tag></span>
      </Space>
      <h2>{props.hotel.rent}</h2>
      <Button type="primary">Show More</Button>
    </Card>
    </div>
  )
}
