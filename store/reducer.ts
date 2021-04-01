import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

import logger from 'redux-logger'
import * as actionTypes from './actionTypes'
import { ArticleAction, ArticleState } from '../interfaces/type'

const initialState = {
  articles: []
}

const reducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, {
          title: action.payload.title,
          body: action.payload.body
        }]
      }
    case actionTypes.SET_POSTS: {
      return {
        ...state,
        articles: action.payload
      }
    }
  }
  return state
}

const store = () => createStore(reducer, applyMiddleware(thunk, logger))

export const wrapper = createWrapper(store)
