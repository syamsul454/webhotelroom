import React, { Component } from 'react'
import { Card, Table, Divider, Button, Modal, Form, Input, Select, Row, Col } from 'antd'
import axios from 'axios';
import './index.css'
import { connect } from 'react-redux'
import API from '../../Services';

// table 
const columns = [
  {
    title: 'Nama Pelanggan',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Kode Pelanggan',
    dataIndex: 'code_pelanggan',
    key: 'code_pelanggan',
  },
  {
    title: 'Nomor KK',
    dataIndex: 'nomor_kk',
    key: 'nomor_kk',
  },
  {
    title: 'Nomor Telepon',
    dataIndex: 'nomor_telepon',
    key: 'Nomor_Telepon',
  },
  {
    title: 'Alamat',
    dataIndex: 'alamat',
    key: 'alamat'
  },

  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Edit</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    nama: 'syamsul',
    nomor_kk: 6764678787876777,
    nomor_telepon: 82340566,
    alamat: 'dasan baru'
  }
];

const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

class DataPelanggan extends Component {

  // cons
  constructor(props){
    super(props)
    this.state = {
      desa : [],
      formData : [],
      name : '',
      nomor_kk : '',
      nomor_telepon : '',
      jenis_kelamin : '',
      dusun : '',
      alamat : '',
      DataPelanggan: []
      
    }
   
  }
  // register 
  name = event => {
    this.setState({
      name: event.target.value,
    });
  }

  nomor_kk = event => {
    this.setState({
      nomor_kk: event.target.value,
    });
  }

  nomor_telepon = event => {
    this.setState({
      nomor_telepon : event.target.value
    })
  }

  jenis_kelamin =  event => {
    this.setState({
      jenis_kelamin : event
    })
    console.log(event)
  }

  dusun = event => {
    this.setState({
      dusun : event
    })
  }

  alamat = event => {
    this.setState({
      alamat : event.target.value
    })
  }

  // modal 
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
     const data = {
       'name': this.state.name,
       'nomor_kk' : this.state.nomor_kk,
       'jenis_kelamin' : this.state.jenis_kelamin,
       'nomor_telepon' : this.state.nomor_telepon,
       'id_dusun' : this.state.dusun,
       'alamat' : this.state.alamat
     }

     axios.post(`http://156.67.219.57/api/pelanggan`,data).then((result)=> {
              console.log(result.data)
              window.location.reload();
          }, (error) => {
              console.log(error)
          })
     
    //  API.AddPelanggan().then(result => {
    //     console.log(result)
    //  })
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
   
  };
  // form 

  componentDidMount(){
      API.DataPelanggan().then(result => {
          this.setState({
            DataPelanggan : result
          })
          
      })

    axios.get('http://156.67.219.57/api/data-desa').then(res => {
      const desa = res.data
      console.log(desa)
      this.setState({desa})
    }) 
  }

  render() {
    console.log(this.props)
    return (
      <Card title="Data Pelanggan" className="card" >
        <div className="btn-add" >
          <Button type="primary" onClick={this.showModal} >Tambah Data Pelanggan</Button>
        </div>
        {/* modal add data pelanggan */}
        <Modal
          title="Tambah Data Pelanggan"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="600px"
        >
          <Form layout="vertical">
            <Row>
              <Col lg={{ span: 10 }} >
                <Form.Item label="Nama">
                  <Input name="name" placeholder="input placeholder" onChange={this.name} />
                </Form.Item>
                <Form.Item label="Nomor Kk">
                  <Input name = "nomor_kk" placeholder="input placeholder" onChange={this.nomor_kk} />
                </Form.Item>
                <Form.Item label="Nomor Telepon">
                  <Input placeholder="input placeholder" onChange={this.nomor_telepon} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10, offset: 1 }}>
                <Form.Item label="Jenis Kelamin">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Jenis Kelamin"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={this.jenis_kelamin}
                  >
                    <Option value="Laki-Laki">Laki-Laki</Option>
                    <Option value="Perempuan">Perempuan</Option>
                  </Select>,
            </Form.Item>
                <Form.Item label="Dusun">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={this.dusun}
                  >
                    {this.state.desa.map((desa, index) => 
                      <Option value={desa.id}>{desa.name}</Option>
                    )}

                  </Select>,
            </Form.Item>
                <Form.Item label="Alamat">
                  <Input placeholder="input placeholder" onChange={this.alamat} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        {/* ------------------- */}
        <Table bordered="false" columns={columns} dataSource={this.state.DataPelanggan} />
      </Card>
    )
  }
}
const nn = (state) => {
  return {
    nama : state.name
  }
}

export default  connect(nn)(Form.create()(DataPelanggan))