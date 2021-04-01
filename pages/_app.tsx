import NextNprogress from 'nextjs-progressbar'
import '../styles/main.scss'
import { wrapper } from '../store/reducer'
import { MainLayout } from '../layout/MainLayout'
import React from 'react'

const MyApp = ({ Component, pageProps, ...props }) => {
  return (
    <MainLayout title={'Latest posts'}>

    <NextNprogress
                color="#7ccbcb"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
    </MainLayout>
  )
}

export default wrapper.withRedux(MyApp)
