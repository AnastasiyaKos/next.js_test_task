import React from 'react'
import Link from 'next/link'
import { Container, Item } from './styledComponents'

export const NavBar = () => {
  return (
        <Container>
            <Link href={'/'}><Item>Latest posts</Item></Link>
            <Link href={'/new'}><Item>Add new post</Item></Link>
        </Container>
  )
}
