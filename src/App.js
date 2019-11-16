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
        <List judul = {"Hulk"} image = {"https://cdn2.tstatic.net/jateng/foto/bank/images/the-incredible-hulk.jpg"} />
          <List judul = {"Avengers"} image = {"https://cdn2.tstatic.net/banjarmasin/foto/bank/images/avengers-endgame-mendatang.jpg"} />
          <List judul = {"Spiderman"} image = {"https://cdn2.tstatic.net/batam/foto/bank/images/petualangan-spiderman-ke-negara-negara-di-eropa.jpg"} />
          <List judul = {"Batman"} image = {"https://imgix-media.wbdndc.net/cms/filer_public/20/79/20793bb7-1697-467b-a084-efef8332d31f/howtocelebratebatmanday-news-header-v1.jpg"} />
        </Content>
      </div>
       <Footer />

      </Layout>
    )
  }
}
export default App