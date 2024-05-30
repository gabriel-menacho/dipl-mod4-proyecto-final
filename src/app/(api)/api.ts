import { ILogin } from '@/components/LoginModal/types'
import { IProduct } from '@/components/Main/types'
import { constants } from '@/config/constants'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'

const getBearer = () => {
  const token = getCookie('token')
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export const login = async (data: ILogin) => {
  try {
    const response = await axios.post(
      `${constants.baseUrl}/api/auth/login`,
      data
    )
    if (response.status === 201) {
      const { access_token } = response.data
      if (access_token) {
        setCookie('token', access_token)
      }
    }
    return response.data
  } catch (error) {
    throw error
  }
}

export const getProducts = async () => {
  try {
    const response = await axios.get(`${constants.baseUrl}/api/products`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getProduct = async (id: string) => {
  try {
    const response = await axios.get(`${constants.baseUrl}/api/products/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createProduct = async (data: IProduct) => {
  try {
    const response = await axios.post(
      `${constants.baseUrl}/api/products`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          ...getBearer().headers,
        },
      }
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateProduct = async (id: number, data: IProduct) => {
  try {
    const response = await axios.patch(
      `${constants.baseUrl}/api/products/${id}`,
      data,
      getBearer()
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(
      `${constants.baseUrl}/api/products/${id}`,
      getBearer()
    )
    return response.data
  } catch (error) {
    throw error
  }
}
