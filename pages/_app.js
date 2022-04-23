import '../styles/globals.css'
import Layout from '../comps/Layout'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div className="page-animation" key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
          pageAnimate: {
            opacity: 1,
            x: 0,
          },
          pageExit: {
            opacity: 0,
            x: 100,
          },
          transition: {
            type: "spring", 
            stiffness: 100,
            duration: .2
          }
        }}>
            <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
