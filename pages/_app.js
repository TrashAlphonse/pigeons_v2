import '../styles/globals.css'
import Layout from '../comps/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
