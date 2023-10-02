import React from 'react'
import { Layout } from 'antd';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';
import { useEffect } from 'react';
import { setHotels } from '../actions';
import hotelData from '../data/hotels.json';
import { useDispatch } from 'react-redux';
const { Header } = Layout;

export default function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHotels(hotelData));
  }, []);
  return (
    <div>
        <Layout className="layout">
            <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white', marginBottom: 0 }}>Get Hotels <GlobalOutlined /></h1>
            </Header>
        </Layout>
    </div>
  )
}
