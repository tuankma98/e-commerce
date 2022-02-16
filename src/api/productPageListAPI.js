import axiosClient from "./axiosClient"

const productPageListAPI = {
  getAll: (params) =>{
    const url = '/'
    return axiosClient.get(url, { params })
  }
}

export default productPageListAPI