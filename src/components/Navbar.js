import React from 'react'
import { Layout } from 'antd';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';

const { Header } = Layout;

export default function Navbar() {
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
