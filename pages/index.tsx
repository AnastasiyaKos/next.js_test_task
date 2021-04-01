import React from 'react'
import Link from 'next/link'
import { MainLayout } from '../layout/MainLayout'
import { getAllPosts } from './api/postsService'

import { wrapper } from '../store/reducer'
import { Post } from './components/post/post'
import { IArticle } from '../interfaces/type'

interface Props {
    posts: IArticle[]
}

function Index ({ posts } : Props) {
  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }
  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <a href={`/posts/${post.id}`}>
            <Post key={post.id} item={post} />
          </a>
        </Link>
      ))}
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async () => {
    const posts = await getAllPosts()
    return {
      props: { posts: posts.data }
    }
  }
)

export default Index
