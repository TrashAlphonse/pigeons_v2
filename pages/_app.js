import '../styles/globals.css'
import Layout from '../comps/Layout'
// import AppContext from '../AppContext'
// import {birds} from '../db/birds.js'
// import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  // const [pigeons, setPigeons] = useState(birds)

  return (
    // <AppContext.Provider value={{
    //   state: {
    //     pigeons: pigeons
    //   },
    //   setPigeons: setPigeons
    // }}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    // </AppContext.Provider>
  )
}

export default MyApp
