import axios from 'axios'
import { IArticle } from '../../interfaces/type'

const BASE_URL = 'https://simple-blog-api.crew.red'

export const getAllPosts = () => {
  return axios.get<IArticle[]>(`${BASE_URL}/posts`)
}

export const getPostById = async (id: string) => {
  const responseData = await axios.get(`${BASE_URL}/posts/${id}`)
  return responseData.data
}

interface CreatePostRequestData {
    title: string
    body: string
}

export const postNewItem = async (postData: CreatePostRequestData) => {
  const responseData = await axios.post(`${BASE_URL}/posts`, postData)
  return responseData.data
}
