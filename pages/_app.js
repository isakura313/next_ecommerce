// pages/_app.js

import Layout from '../components/layout'
import 'antd/dist/antd.css';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}