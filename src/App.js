import React, { Component } from 'react';
import Header from './component/header/header'
import List from './component/page/room'
import Customer from './component/page/customer'
import './App.css';
import { Layout} from 'antd';

  class App extends Component {
    render() {
      return (
        <Layout>
       <Header />
        <Customer nama = {'syamsul hadi'} />
       </Layout>
      );
    }
  }

  export default App;