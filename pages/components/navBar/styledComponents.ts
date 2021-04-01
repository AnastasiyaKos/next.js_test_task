import styled from 'styled-components'

export const Container = styled.nav`
    position: fixed;
    height: 60px;
    left: 0;
    top: 0;
    right: 0;
    background: darkslategrey;                   
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Item = styled.a`
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      color: #bdcdcc;
    }                
`
