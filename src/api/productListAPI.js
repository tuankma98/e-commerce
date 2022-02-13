import axiosClient from "./axiosClient"

const productListAPI = {
  getAll(params) {
    const url = ''
    return axiosClient.get(url, { params })
  }
}

export default productListAPI