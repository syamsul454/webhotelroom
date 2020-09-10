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

const Post = (path) => (data) => {
    console.log(data)
    // const promise = new Promise((resolve, reject)=> {
    //     axios.post(`http://156.67.219.57/api/${path},${data}`).then((result)=> {
    //         resolve(result.data)
    //     }, (error) => {
    //         reject(error)
    //     })
    // })
}

const DataPelanggan = Get('pelanggan')
const DataPembayaran = Get('list-pembayaran')
const Pembayaran = Get('pembayaran')
const AddPelanggan = Post('pelanggan')

const API = {
    DataPelanggan,
    DataPembayaran,
    AddPelanggan
}

export default API