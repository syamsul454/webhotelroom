import React from 'react';
import { Layout} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Component/Header'
import Home from './Component/Home'
import DataPelanggan from './Component/DataPelanggan'
import DataPegawai from './Component/DataPegawai'
import Pembayaran from './Component/Pembayaran'
import Footer from './Component/Footer'
import axios from 'axios'
const {Content} = Layout;


class App extends React.Component {
   
  render(){
    return (
      <Router>
      <Layout>
      <div>
      
        <Header />
        <Content className = "content">
      
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pegawai">
            <DataPegawai />
          </Route>
          <Route path="/pelanggan">
            <DataPelanggan />
          </Route>
          <Route path="/pembayaran">
            <Pembayaran/>
          </Route>
        </Switch>
      </div>
   
        </Content>
      </div>
       <Footer/>
      </Layout>
      </Router>
    )
  }
}
export default App