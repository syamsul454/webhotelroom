import React from 'react'
import './style.css'
import { Layout, Menu } from 'antd'
const { Header } = Layout;


const Head = () => {
  return (
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo">
          <div className="Pamdes">
            <p className="judul">
              Pamdes
            </p>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', width: '600px',height: '64px'}}
          >
            <Menu.Item key="1">Data Pelanggan</Menu.Item>
            <Menu.Item key="2">Data Pembayaran</Menu.Item>
            <Menu.Item key="3">Data Pegawai</Menu.Item>
          </Menu>
        </div>
      </Header>
    </Layout>
  )
}


export default Head

