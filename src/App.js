import React from 'react';
import { Layout} from 'antd';
import Header from './Component/Component/Header'
import List from './Component/Component/List'
import Banner from './Component/Component/carousel'
import Footer from './Component/Component/Footer'
import axios from 'axios'
const {Content} = Layout;


class App extends React.Component {
   
  
  render(){
    return (
      <Layout>
      <div>
        <Header />
        <Banner />
        <Content className = "content">
          <div>
            < p style={{textAlign:'center',fontSize:'30px'}}>
              Selamat Datang di Sistem Pembayaran Pamdes Desa Prinnggasela
            </p>
          </div>
        </Content>
      </div>
       <Footer/>
      </Layout>
    )
  }
}
export default App