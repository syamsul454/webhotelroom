import React, { Component } from 'react'
import { Card, Table, Divider, Button, Modal, Form, Input, Select, Row, Col } from 'antd'
import axios from 'axios';
import './index.css'
import { connect } from 'react-redux'
import API from '../../Services';

// table 
const columns = [
  {
    title: 'Nama Pegawai',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Username',
    dataIndex: 'user.username',
    key: 'name',
  },


  {
    title: 'Nomor Induk Pegawai',
    dataIndex: 'nip',
    key: 'nip',
  },
  {
    title: 'Jabatan',
    dataIndex: 'jabatan',
    key: 'jabatan',
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
        <Button className="btn-delete" onClick={()=> deletePegawai(record)} >Delete</Button>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    nama: 'syamsul',
    nip: 6764678787876777,
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

const { confirm } = Modal;
function deletePegawai(s) {
  confirm({
    title: "Delete",
    content: "apakah Delete data Pegawai ini",
    onOk() {
      return new Promise((resolve, reject) => {
        axios.delete(`http://156.67.219.57/api/data-pegawai/${s.id}`).then((result)=>{
            resolve(result.data)
            window.location.reload();
        }, (error)=>{
            reject(error)
        })
        
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() { },
  });
}

class DataPegawai extends Component {

  // cons
  constructor(props){
    super(props)
    this.state = {
      desa : [],
      formData : [],
      name : '',
      nip : '',
      nomor_telepon : '',
      jenis_kelamin : '',
      dusun : '',
      alamat : '',
      DataPelanggan: [],
      jabatan:'',
      username: '',
      password:''
      
    }
   
  }
  // register 
  
  name = e => {
      this.setState({
          name : e.target.value
      })
  }

  nip = e => {
    this.setState({
      nip : e.target.value
    })
  }
  alamat = event => {
    this.setState({
      alamat : event.target.value
    })
  }

  jabatan = event => {
    this.setState({
      jabatan : event.target.value
    })
  }

  nomor_telepon = event => {
    this.setState({
      nomor_telepon : event.target.value
    })
  }

  username = event => {
    this.setState({
      username : event.target.value
    })
  }

  password = event => {
    this.setState({
      password : event.target.value
    })
  }

  

  // modal 
  state = { visible: false, visibledelete: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showModalDelete = () => {
    this.setState({
      visibledelete: true,
    });
  }

  handleOk = e => {
     const data = {
       'name': this.state.name,
       'nip' : this.state.nip,
       'jabatan' : this.state.jabatan,
       'nomor_telepon' : this.state.nomor_telepon,
       'alamat' : this.state.alamat,
        'username' : this.state.username,
        'password' : this.state.password,
        'c_password' : this.state.password,
        'role' : 1
     }

     axios.post(`http://156.67.219.57/api/register`,data).then((result)=> {
              console.log(result.data)
              window.location.reload();
          }, (error) => {
              console.log(error)
          })
     
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
   
  };
  // form 

  componentDidMount(){
      API.DataPegawai().then(result => {
          this.setState({
            DataPelanggan : result.data
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
      <Card title="Data Pegawai" className="card" >
        <div className="btn-add" >
          <Button type="primary" onClick={this.showModal} >Tambah Data Pegawai</Button>
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
              <Form.Item label="Username">
                  <Input name="name" placeholder="Username" onChange={this.username} />
                </Form.Item>
                <Form.Item label="Nama">
                  <Input name="name" placeholder="Nama Pegawai" onChange={this.name} />
                </Form.Item>
                <Form.Item label="Nomor Induk Pegawai">
                  <Input name = "nip" placeholder="Nomor Induk Pegawai" onChange={this.nip} />
                </Form.Item>
                
              </Col>
              <Col lg={{ span: 10, offset: 1 }}>
              <Form.Item label="Password">
                  <Input placeholder="Password" onChange={this.password} />
                </Form.Item>
              <Form.Item label="Nomor Telepon">
                  <Input placeholder="Nomor Telepon" onChange={this.nomor_telepon} />
                </Form.Item>
              <Form.Item label="Jabatan">
                  <Input placeholder="Jabatan" onChange={this.jabatan} />
                </Form.Item>
                <Form.Item label="Alamat">
                  <Input placeholder="Alamat" onChange={this.alamat} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        {/* moddal delete */}
        <Modal 
        title="Tambah Data Pelanggan"
          visible={this.state.visibledelete}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="600px"
        >

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

export default  connect(nn)(Form.create()(DataPegawai))