import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
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
              style={{ lineHeight: '64px', width: '600px', height: '64px' }}
            >
              <Menu.Item ><Link to="pelanggan">Data Pelanggan </Link> </Menu.Item>
              <Menu.Item > Data Pembayaran</Menu.Item>
              <Menu.Item ><Link to="pegawai"> Data Pegawai</Link></Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
   
  )
}


export default Head

