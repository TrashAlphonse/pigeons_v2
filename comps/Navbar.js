import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { motion } from 'framer-motion'

const Navbar = () => {

    const hoverEffect = {
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: .2
        }
    }

    return ( 
        <nav className='site-nav'>
            <h1 className='nav-heading'>Pigeonsss</h1>
            <Link href="/"><motion.a className={styles.link} whileHover={hoverEffect}>Home</motion.a></Link>
            <Link href="/about"><motion.a className={styles.link} whileHover={hoverEffect}>About</motion.a></Link>
        </nav>
     );
}
 
export default Navbar;