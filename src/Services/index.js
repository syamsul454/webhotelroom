import axios from 'axios'

const Get = (path) => (data) => {
    const promise = new Promise((resolve,reject) => {
        axios.get(`http://156.67.219.57/api/${path}`).then((result)=>{
            resolve(result.data)
        }, (error)=>{
            reject(error)
        })
    })
    return promise
}


const DataPelanggan = Get('pelanggan')
const DataPembayaran = Get('list-pembayaran')
const Pembayaran = Get('pembayaran')

const DataPegawai = Get('data-pegawai')

const API = {
    DataPelanggan,
    DataPembayaran,
    DataPegawai
}

export default API