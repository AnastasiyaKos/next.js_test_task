import React from 'react';
import { Container,StyledTitle  } from './styledComponents';

interface PostData {
    item: {
        title: string
        body: string
    }
}

export const Post = ({ item }: PostData) => (
  <Container>
    <StyledTitle>{item.title}</StyledTitle>
    <p>{item.body}</p>
  </Container>
);
