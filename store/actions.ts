import * as actionTypes from './actionTypes'
import { getAllPosts, postNewItem } from '../pages/api/postsService'
import { IArticle } from '../interfaces/type'

export function setNewPost (article: IArticle) {
  return {
    type: actionTypes.ADD_ARTICLE,
    article
  }
}

export function addNewPost (article: IArticle) {
  return async () => {
    try {
      await postNewItem(article)
    } catch (e) {
      alert('Failed to create new post')
    }
  }
}

export const setPosts = (posts) => {
  return {
    type: actionTypes.SET_POSTS,
    posts
  }
}

export const getPosts = () => {
  return async dispatch => {
    const posts = await getAllPosts()
    dispatch(setPosts(posts.data))
  }
}
