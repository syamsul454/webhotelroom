import React, { Component } from 'react'
import { Card, Table, Button, Modal, Form, Select, Tag, Layout } from 'antd'
import axios from 'axios';
import './index.css'
import { connect } from 'react-redux'
import API from '../../Services';

// table 
const columns = [
  {
    title: 'Nama Pelanggan',
    dataIndex: 'debit_air.pelanggan.name',
    key: 'debit_air.pelanggan.name',
  },
  {
    title: 'Alamat',
    dataIndex: 'debit_air.pelanggan.alamat',
    key: 'debit_air.pelanggan.alamat',
  },

  {
    title: 'Jumlah Meter Awal',
    dataIndex: 'debit_air.meter_awal',
    key: 'debit_air.meter_awal',
  },

  {
    title: 'Jumlah Meter Akhir',
    dataIndex: 'debit_air.meter_akhir',
    key: 'debit_air.meter_akhir',
  },

  {
    title: 'Jumlah Pemakain',
    dataIndex: 'debit_air.pemakain',
    key: 'debit_air.pemakain',

  },
  {
    title: 'Tanggal Masuk',
    dataIndex: 'tanggal_pembayaran',
    key: 'tanggal_pembayaran',
  },
  {
    title: 'Jumlah Tagihan',
    dataIndex: 'jumlah_pembayaran',
    key: 'jumlah_pembayaran',
    render: (value, row, index) => {
      // do something like adding commas to the value or prefix
      return <span>Rp {value.toLocaleString('local')}</span>;
    },


  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => {
      var m = text === 1 ? 'green' : 'red'
      return <Tag color={m}> status </Tag>
    }
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex: 'status',
    render: (text, record) => (
      text === 1 ? <span>
        <Button type="primary" disabled>Confirm</Button>
      </span> : <span>
          <Button type="primary" onClick={() => showConfirm(record)}>Confirm</Button>
        </span>
    ),
  },
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

function showConfirm(s) {
  confirm({
    title: "Detail Pelanggan",
    content: <Layout style={{ backgroundColor: 'white' }}><p>Nama : {s.debit_air.pelanggan.name}</p> <p>Jumlah Pembyaran : Rp {s.jumlah_pembayaran.toLocaleString('local')}</p> </Layout>,
    onOk() {
  
      return new Promise((resolve, reject) => {
        axios.get(`http://156.67.219.57/api/pembayaran/${s.id}`).then((result)=>{
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

class Pembayaran extends Component {

  // cons
  constructor(props) {
    super(props)
    this.state = {

      DataPembayaran: []

    }

  }

  // modal 

  // form 

  componentDidMount() {
    API.DataPembayaran().then(result => {
      this.setState({
        DataPelanggan: result
      })
      console.log(this.state.DataPelanggan)
    })

    axios.get('http://156.67.219.57/api/data-desa').then(res => {
      const desa = res.data
      console.log(desa)
      this.setState({ desa })
    })
  }

  render() {
    console.log(this.props)
    return (
      <Card title="Data Pembayaran" className="card" >
        <Table bordered="false" columns={columns} dataSource={this.state.DataPelanggan} />
      </Card>
    )
  }
}
const nn = (state) => {
  return {
    nama: state.name
  }
}

export default connect(nn)(Form.create()(Pembayaran))