import React from 'react';
import './header.css'
import { Layout, Menu, Button, Icon} from 'antd';
const { Header} = Layout;

class head extends React.Component {
  render() {
    return (

    <Header>
      <div className = 'logo'> <h1>Bale Hotel</h1>  </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="1"><Icon type="check-circle"/>Checkin</Menu.Item>
        <Menu.Item key="2">Room</Menu.Item>
        <Menu.Item key="3">Customer</Menu.Item>
      </Menu>
        <div className='profil'>
        <Button type="primary">Syamsul  <Icon type="down" /> </Button>
        </div>
    </Header>
    )
  }
    
  }

  export default head