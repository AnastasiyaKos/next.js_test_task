import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { addNewPost } from '../store/actions'
import { MainLayout } from '../layout/MainLayout'
import { Input } from './components/input/input'
import { InputsContainer } from './styledComponents/newPost'

import { Button } from './components/button/button'
import { IArticle } from '../interfaces/type'

interface Props {
    saveArticle: (article: IArticle | any) => void
}

// eslint-disable-next-line no-empty-pattern
const New = ({}: Props) => {
  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (articleParam: IArticle) => dispatch(addNewPost(articleParam)),
    [dispatch]
  )

  const [article, setArticle] = React.useState<IArticle | {}>()

  const handlePostData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const handleAddNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article as IArticle)
  }

  return (
    <MainLayout title="Add post">
      <form onSubmit={handleAddNewPost} className="Add-article">
        <InputsContainer>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            onChange={handlePostData}
          />
          <Input
            type="text"
            id="body"
            placeholder="Description"
            onChange={handlePostData}
          />
        </InputsContainer>
        <Button disabled={!!article} title="Create post" />
      </form>
    </MainLayout>
  )
}

export default New
