import Head from "next/head";
import React from "react";
import {NavBar} from "../pages/components/navBar/navBar";
import {Container} from './styledComponents'

export  function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | Next & TypeScript project</title>
            </Head>
            <NavBar/>
            <Container>
                {children}
            </Container>
        </>
    )
}
