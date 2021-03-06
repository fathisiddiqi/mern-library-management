import axios from 'axios'
const baseUrl = '/api/v1/borrows'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: {
      Authorization: token,
    },
  }

  const res = await axios.get(baseUrl, config)
  return res.data
}

const getId = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  }
  const res = await axios.get(`${baseUrl}/${id}`, config)
  return res.data
}

const create = async (obj) => {
  const config = {
    headers: {
      Authorization: token,
    },
  }

  const res = await axios.post(`${baseUrl}`, obj, config)
}

const update = async (obj, id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  }

  const res = await axios.put(`${baseUrl}/${id}`, obj, config)
  return res.data
}

const remove = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  }

  const res = await axios.delete(`${baseUrl}/${id}`, config)
  return res.data
}

export default { setToken, getAll, getId, create, update, remove }
